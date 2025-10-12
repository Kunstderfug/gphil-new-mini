const fs = require('fs')

const tempoRange = 130
const section = 'section_1'
const trackTitle = 'Rachmaninoff_Concerto_2'
const filePath = `public/assets/${trackTitle}_${section}/`
const format = 'flac'
const peakFormat = 'json'
const bit = '-b 8'

const peakBuilder = 'audiowaveform/./audiowaveform'

function createData() {
  let text = ''
  let tempo = 90

  while (tempo <= tempoRange) {
    const fileInput = `-i ${filePath}/${trackTitle}_${section}_tempo_${tempo}.${format} `
    const fileOutput = `-o ${filePath}/${trackTitle}_${section}_tempo_${tempo}.${peakFormat}`
    const formattedData = `${peakBuilder} ${fileInput} ${fileOutput} ${bit}\n`
    text = text + formattedData
    tempo++
  }

  fs.writeFile('../../public/assets/testdata.txt', text, (err: Error) => {
    if (err) console.log(err?.message)
  })
}

createData()