# theremin
[![NPM](https://nodei.co/npm/theremin.png)](https://nodei.co/npm/theremin/)

web audio theremin

```js
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
```


## setFreq(freq)

set the fequence in hertz

## setGain(gain)

set the volume,  value should be between 0 and 1, where 0 is mute

## write({freq: freq, gain: gain})

set frequence and gain with an object. this is a write compatible
write method.

