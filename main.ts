/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

let neoPixelStrip: neopixel.Strip = null

neoPixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)

// cut all colors

if (input.lightLevel() <= 51)
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.show()

if (input.lightLevel() >= 52)
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
  neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.show()

if (input.lightLevel() > 104)
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
  neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
  neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.show()

if (input.lightLevel() > 156)
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
  neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
  neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
  neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
  neoPixelStrip.show()

if (input.lightLevel() > 208)
  neoPixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.White))
  neoPixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.White))
  neoPixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.White))
  neoPixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
  neoPixelStrip.show()
