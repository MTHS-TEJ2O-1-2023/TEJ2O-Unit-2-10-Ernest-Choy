/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ernest
 * Created on: Oct 2023
 * This program turns on the neopixels depending on the lightLevel
*/

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
basic.forever(function () {
  // if light level is less than 51
  if (input.lightLevel() <= 51) {
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.show()
  }

  // if light level is more than 52
  if (input.lightLevel() >= 52) {
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.show()
  }
  // if light level is more than 104
  if (input.lightLevel() > 104) {
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.show()
  }

  // if light level is more than 156
  if (input.lightLevel() > 156) {
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
    neoPixelStrip.show()
  }

  // if light level is more than 208
  if (input.lightLevel() > 208) {
    neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
    neoPixelStrip.show()
  }
})
