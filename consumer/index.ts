import {getAllZodiacSigns, getChineseZodiacSign, getZodiacSign, getZodiacSignForDate} from "@clydedsouza/horoscope"
import { ChineseZodiacSigns } from "@clydedsouza/horoscope/dist/types/ChineseZodiacSigns"
import { ZodiacSigns } from "@clydedsouza/horoscope/dist/types/ZodiacSigns"

console.log(getZodiacSign(ZodiacSigns.Aries))
console.log(getZodiacSign(ZodiacSigns.Cancer)?.duration())
console.log(getZodiacSignForDate(new Date("2 March 1995")))
console.log(getAllZodiacSigns())

console.log(getChineseZodiacSign(ChineseZodiacSigns.Rat))
 