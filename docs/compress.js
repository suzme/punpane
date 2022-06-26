// セーブデータの圧縮
const compress = lamps => toBase64(addSum(bit3to6(encodeSwitchedRunLength(lamps))))

// セーブデータの展開
const decompress = str => {
  const array6bit = fromBase64(str)
  const data = array6bit.slice(0, -1)
  const sum = calcSum(data)
  if (array6bit[array6bit.length - 1] !== sum) {
    throw new Error('checksum error')
  }

  return decodeSwitchedRunLength(bit6to3(data))
}

// base64(風)変換
const base64chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.split('')
const toBase64 = array6bit => array6bit.map(n => base64chars[n]).join('')
const fromBase64 = base64str => {
  const replaced = base64str.replace(/[^A-Za-z0-9\+\/]/g,'')
  return replaced.split('').map(c => base64chars.indexOf(c))
}

// チェックサムの計算
const calcSum = array6bit => array6bit.reduce((acc, val) => acc + val, 0) % 64
const addSum = array6bit => [...array6bit, calcSum(array6bit)]

// 6bit -> 3bit
const bit6to3 = array6bit => array6bit.map(num6bit => [Math.floor(num6bit / 8), num6bit % 8]).flat()

// 3bit -> 6bit
const bit3to6 = array3bit => {
  const array6bit = []
  for (let i = 0; i < array3bit.length; i+=2) {
    const a = array3bit[i]
    const b = (i + 1 >= array3bit.length) ? 0 : array3bit[i + 1]
    array6bit.push(a * 8 + b)
  }
  return array6bit
}

// Switched Run Length Encodingでエンコード
const encodeSwitchedRunLength = lamps => {
  const compressed = []
  let i = 0 // 作業中のブロックの先頭インデックス

  while(i < lamps.length) {
    /*
      不連続モード
    */
    // jを次の連続なデータの先頭にする
    let j = i
    while (
      j <= lamps.length &&
      lamps[j] !== lamps[j + 1] &&
      (j - i) < 7
    ) {
      j++
    }
 
    // 不連続なデータの個数
    compressed.push(j - i)

    // 不連続なデータ本体
    compressed.push(...lamps.slice(i, j))

    // 次の連続なデータへ
    i = j

    // 範囲外なら終了
    if (i >= lamps.length) {
      break
    }

    /*
     連続モード
    */
    // jを次の不連続なデータの先頭にする
    while (
      j < lamps.length &&
      lamps[i] === lamps[j] &&
      (j - i) < 7)
    {
      j++
    }

    // 連続なデータの個数
    compressed.push(j - i)

    // 連続しているランプの種類
    compressed.push(lamps[i])

    // 次の不連続なデータへ
    i = j
  }

  return compressed
}

// Switched Run Length Encodingをデコード
const decodeSwitchedRunLength = compressed => {
  const decompressed = []
  let i = 0 // 作業中のブロックの先頭インデックス

  while(i < compressed.length) {
    /*
      不連続モード
    */
    if (compressed[i] == 0) {
      // 不連続なデータが無い場合は次へ
      i++
    } else {
      // 次の連続なデータの先頭を計算
      const j = i + 1 + compressed[i]

      // 範囲外エラー
      if (j - 1 >= compressed.length) {
        throw new Error('invalid data')
      }

      // 不連続なデータを切り出す
      const data = compressed.slice(i + 1, j)
      decompressed.push(...data)

      // 次の連続なデータへ
      i = j
    }

    // 範囲外なら終了
    if (i >= compressed.length) {
      break
    }

    /*
      連続モード
    */
    if (compressed[i] === 0) {
      // 連続なデータが無い場合は次へ
      i++
    } else {
      // 範囲外エラー
      if (i + 1 >= compressed.length) {
        throw new Error('invalid data')
      }

      // 連続なデータを追加
      decompressed.push(...Array(compressed[i]).fill(compressed[i + 1]))

      // 次の不連続なデータへ
      i += 2
    }
  }

  return decompressed
}
