Ultrasonic Rangefinder (HC-SR04)
==============

Library for connecting Tessel to HC-SR04 ultrasonic rangefinder.

## Materials


## Dividing the voltage

The rangefinder responds in the 5V range, but Tessel reads in a range of 0-3.3V. Therefore, in order to use the rangefinder, we'll need to make a voltage divider in order to siphon off some of that excess voltage.

Sparkfun has a lovely tutorial on voltage dividers; I recommend you read it [here](https://learn.sparkfun.com/tutorials/voltage-dividers/all?print=1).

This is the voltage divider equation:
Vout = Vin * R2 / (R1 + R2)

Since we want a Vout of 3.3V from a Vin of 5V, we need to choose resistors such that 3.3/5 = R2 / (R1 + R2).
Some close-enough values are:

R1 = 10k ohm | R2 = 20k ohm
R1 = 5.6k ohm | R2 = 10k ohm

If you plug in these numbers to the equation, you'll see it's a little off. But it's good enough for our purposes.
