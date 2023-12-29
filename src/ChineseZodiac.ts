import { ChineseZodiacElements } from './types/ChineseZodiacElements'
import {
  ChineseZodiacSigns,
  getAllChineseZodiacSignsInternal,
} from './types/ChineseZodiacSigns'
import { YinYang } from './types/YinYang'
import { ChineseZodiacModel } from './types/ZodiacModel'

/**
 * Get details of the zodiac sign supplied.
 * @param sign The zodiac sign that you want more details about.
 * @returns A Chinese zodiac sign object.
 */
export const getChineseZodiacSign = (
  sign: ChineseZodiacSigns
): ChineseZodiacModel | undefined => {
  return getAllChineseZodiacSignsInternal().get(sign)
}

/**
 * Get the Chinese zodiac sign for the supplied date.
 * @param requestedDateTime The date you want to query.
 * @returns Returns a Chinese zodiac sign object.
 */
export const getChineseZodiacSignForDate = (
  requestedDateTime: Date
): ChineseZodiacModel | undefined => {
  const a = Math.abs(requestedDateTime.getFullYear()) - 4
  const b = Math.floor(a / 12) * 12
  switch (Math.abs(a - b)) {
    case 0:
      return getAllChineseZodiacSignsInternal().get(ChineseZodiacSigns.Rat)
    case 1:
      return getAllChineseZodiacSignsInternal().get(ChineseZodiacSigns.Ox)
    case 2:
      return getAllChineseZodiacSignsInternal().get(ChineseZodiacSigns.Tiger)
    case 3:
      return getAllChineseZodiacSignsInternal().get(ChineseZodiacSigns.Rabbit)
    case 4:
      return getAllChineseZodiacSignsInternal().get(ChineseZodiacSigns.Dragon)
    case 5:
      return getAllChineseZodiacSignsInternal().get(ChineseZodiacSigns.Snake)
    case 6:
      return getAllChineseZodiacSignsInternal().get(ChineseZodiacSigns.Horse)
    case 7:
      return getAllChineseZodiacSignsInternal().get(ChineseZodiacSigns.Goat)
    case 8:
      return getAllChineseZodiacSignsInternal().get(ChineseZodiacSigns.Monkey)
    case 9:
      return getAllChineseZodiacSignsInternal().get(ChineseZodiacSigns.Rooster)
    case 10:
      return getAllChineseZodiacSignsInternal().get(ChineseZodiacSigns.Dog)
    case 11:
      return getAllChineseZodiacSignsInternal().get(ChineseZodiacSigns.Pig)
  }
}

/**
 * Gets the Chinese zodiac element based on the year.
 * This is different from the fixed element which is
 * strongly associated with one or more zodiac sign.
 * @param year The year you want the zodiac element for.
 * @returns The Chinese zodiac element for the supplied year.
 */
export const getChineseZodiacElementBasedOnYear = (
  year: number
): ChineseZodiacElements => {
  const lastDigitOfYear = +year.toString().substring(year.toString().length - 1)
  switch (lastDigitOfYear) {
    case 0:
    case 1:
      return ChineseZodiacElements.Metal
    case 2:
    case 3:
      return ChineseZodiacElements.Water
    case 4:
    case 5:
      return ChineseZodiacElements.Wood
    case 6:
    case 7:
      return ChineseZodiacElements.Fire
    default:
      return ChineseZodiacElements.Earth
  }
}

/**
 * Gets all zodiac signs that are associated with either Yin or Yang.
 * This is a fixed yinyang-to-zodiac-sign association.
 * @param yinOrYang Supply either Yin or Yang.
 * @returns Returns a list of Chinese zodiac signs that match the YinYang filter.
 */
export const getAllChineseZodiacSignsForYinYang = (
  yinOrYang: YinYang
): ChineseZodiacModel[] => {
  return Array.from(getAllChineseZodiacSignsInternal().values()).filter(
    (sign) => sign.yinYang === yinOrYang
  )
}

/**
 * Gets all zodiac signs that are associated with the zodiac element supplied.
 * This is a fixed element-to-zodiac-sign association.
 * @param element The zodiac element that you want to query.
 * @returns Returns a list of Chinese zodiac signs that are associated with the supplied zodiac element.
 */
export const getAllChineseZodiacSignsForAnElement = (
  element: ChineseZodiacElements
): ChineseZodiacModel[] => {
  return Array.from(getAllChineseZodiacSignsInternal().values()).filter(
    (sign) => sign.chineseZodiacElements === element
  )
}

/**
 * Gets all zodiac signs and details for each sign.
 * @returns List of zodiac signs each as a zodiac sign object.
 */
export const getAllChineseZodiacSigns = (): ChineseZodiacModel[] => {
  return Array.from(getAllChineseZodiacSignsInternal().values())
}
