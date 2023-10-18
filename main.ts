/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Oct 2023
 * This program turns on the neopixels depending on the lightLevel
*/

let lightvalue: number
lightvalue = input.lightLevel()
let neoPixelStrip: neopixel.Strip = null

// Clean up
basic.clearScreen()
neoPixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neoPixelStrip.show()
basic.showIcon(IconNames.Happy)

// cut all colors
basic.forever(function() {
  if (input.lightLevel() <= 51) {
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.show()
  }
  if (input.lightLevel() >= 52) {
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.show()
  }
  if (input.lightLevel() > 104) {
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.show()
  }
  if (input.lightLevel() > 156) {
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.show()
  }
  if (input.lightLevel() > 208) {
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.show()
  }
})
