'use strict'

// クリアランプを保存するlocalStorageのキー
const storageKey = 'lamps-punpane'

// クリアランプの色
const lampColors = ['#dddddd', '#ccffcc', '#ffffcc', '#ffcccc', '#ffffff', '#ccccff', 'linear-gradient(to right,#ffcccc,#ffffcc,#ccffcc,#ccffff,#ccccff,#ffccff)']

// クリアランプ読み込み
const storedLamps = JSON.parse(localStorage.getItem(storageKey) || '[]')

charts.forEach((chart, i) => {
  // クリアランプの初期化
  chart.id = i
  chart.lamp = storedLamps[i] || 0
  chart.lampColor = lampColors[chart.lamp]

  // URLにscoreId付加
  if (chart.scoreId) {
    const urlObj = new URL(chart.url)
    urlObj.searchParams.append('scoreId', chart.scoreId)
    chart.url = urlObj.toString()
  }
})

// タイトル、難易度でソート
const orderBy = (key, compare) => (a, b) =>
  compare ? compare(a[key], b[key]) : a[key] - b[key]
charts.sort(orderBy('title', (a, b) => a.localeCompare(b, 'ja')))
charts.sort(orderBy('level'))

charts.forEach(chart => {
  if (chart.level === '99') {
    chart.level = '?'
  }
})

// 難易度先頭にマーク(区切り表示用)
let currentLevel = 0
charts.forEach(chart => {
  if (chart.level != currentLevel) {
    chart.levelBorder = 'true'
    currentLevel = chart.level
  }
})

// Vueインスタンス作成
const app = new Vue({
  el: '#app',
  data: {
    charts: charts,
    lampColors: lampColors
  },
  methods: {
    // クリアランプ変更
    changeLamp: (id, reverse) => {
      const chart = charts.find(chart => chart.id === id)
      chart.lamp = chart.lamp + (reverse ? -1 : 1)
      if (chart.lamp >= lampColors.length) {
        chart.lamp = 0
      } else if (chart.lamp < 0) {
        chart.lamp = lampColors.length - 1
      }
      chart.lampColor = lampColors[chart.lamp]

      const lamps = charts.slice().sort(orderBy('id')).map(chart => chart.lamp)
      localStorage.setItem(storageKey, JSON.stringify(lamps))
    },

    changeLamps: lamps => {
      charts.forEach(chart => {
        if (chart.id < lamps.length) {
          chart.lamp = lamps[chart.id]
        } else {
          chart.lamp = 0
        }
        chart.lampColor = lampColors[chart.lamp]
      })
      localStorage.setItem(storageKey, JSON.stringify(lamps))
    }
  }
})

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('share').addEventListener('click', () => {
    const lamps = charts.slice().sort(orderBy('id')).map(chart => chart.lamp)
    location.href = 'share.html?' + compress(lamps)
  })

  document.getElementById('export').addEventListener('click', () => {
    const lamps = charts.slice().sort(orderBy('id')).map(chart => chart.lamp)
    prompt('', compress(lamps))
  })

  document.getElementById('import').addEventListener('click', () => {
    const compressed = prompt('インポートするデータを貼り付けてください。', '')
    if (compressed === null || compressed === '') {
      return
    }
    try {
      const lamps = decompress(compressed)
      app.changeLamps(lamps)
    } catch (error) {
      if (error.message === 'checksum error') {
        alert('データが壊れています。\n入力データ: ' + compressed)
      } else if (error.message === 'invalid data') {
        alert('不正なデータです。\n入力データ: ' + compressed)
      } else {
        alert('不明なエラーが発生しました。\n' + error + '\n入力データ: ' + compressed)
      }
    }
  })

  document.getElementById('reset').addEventListener('click', () => {
    const reset = prompt('すべてのランプを消します。\n確認のため DELETE ALL と入力してください。', '')
    if (reset === 'DELETE ALL') {
      app.changeLamps([])
    }
  })
})
