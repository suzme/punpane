'use strict'

// クリアランプの色
const lampColors = ['#dddddd', '#ccffcc', '#ffffcc', '#ffcccc', '#ffffff', '#ccccff']

// クリアランプ読み込み
let storedLamps = []
try {
  storedLamps = decompress(location.search.substring(1))
} catch (error) {
  document.addEventListener('DOMContentLoaded', () => {
    let message = ''
    if (error.message === 'checksum error') {
      message = 'データが壊れています。'
    } else if (error.message === 'invalid data') {
      message = '不正なデータです。'
    } else {
      message = error
    }
    document.getElementById('message').innerText = message
  })
}

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
    charts: charts
  }
})
