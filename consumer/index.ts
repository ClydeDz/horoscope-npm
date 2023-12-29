import {
  ChineseZodiacElements,
  ChineseZodiacSigns,
  YinYang,
  ZodiacSigns,
  getAllChineseZodiacSigns,
  getAllChineseZodiacSignsForAnElement,
  getAllChineseZodiacSignsForYinYang,
  getAllZodiacSigns,
  getChineseZodiacElementBasedOnYear,
  getChineseZodiacSign,
  getChineseZodiacSignForDate,
  getZodiacSign,
  getZodiacSignForDate,
} from '@clydedsouza/horoscope'

console.log(
  'checking date conversion',
  new Date('2 March 1995').getDate(),
  new Date('2 March 1995').getMonth(),
  new Date('2 March 1995').getFullYear()
)
console.log(getZodiacSign(ZodiacSigns.Cancer))
console.log(getZodiacSignForDate(new Date('2 March 1995')))
console.log(getAllZodiacSigns())

console.log(getChineseZodiacSign(ChineseZodiacSigns.Rat))
console.log(getAllChineseZodiacSigns())
console.log(getAllChineseZodiacSignsForAnElement(ChineseZodiacElements.Earth))
console.log(getAllChineseZodiacSignsForYinYang(YinYang.Yang))
console.log(getChineseZodiacElementBasedOnYear(2024))
console.log(getChineseZodiacSignForDate(new Date('25 December 1990')))
