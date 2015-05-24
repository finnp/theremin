var freq = 100
var gain = 0.5

var theremin = require('./')({gain: gain, freq: freq})

setInterval(function () {
  freq++
  theremin.setFreq(freq)
}, 30)

setInterval(function () {
  gain /= 1.3
  theremin.setGain(gain)
}, 200)