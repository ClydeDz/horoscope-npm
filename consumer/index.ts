import {ChineseZodiacSigns, ZodiacSigns, getAllZodiacSigns, getChineseZodiacSign, getZodiacSign, getZodiacSignForDate} from "@clydedsouza/horoscope"

console.log("checking date conversion", new Date("2 March 1995").getDate(), new Date("2 March 1995").getMonth(), new Date("2 March 1995").getFullYear())
console.log(getZodiacSign(ZodiacSigns.Cancer))
console.log(getZodiacSignForDate(new Date("2 March 1995")))
console.log(getAllZodiacSigns())

console.log(getChineseZodiacSign(ChineseZodiacSigns.Rat))
 