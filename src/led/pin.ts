// This is the pinout map, each key represents
// the digital pin on the board, the value
// represents the numeric id mapped by pigpio

interface pinout {
  [key: number]: number
}

const pinout: pinout = {
  11: 0,
  12: 1,
  13: 2,
  15: 3,
  16: 4,
  18: 5,
  19: 12,
  21: 13,
  22: 6,
  23: 14,
  24: 10,
  26: 11,
  29: 21,
  31: 22,
  32: 26,
  33: 23,
  35: 24,
  36: 27,
  37: 25,
  38: 28,
  40: 29
};

export default (pin: number) => pinout[pin];