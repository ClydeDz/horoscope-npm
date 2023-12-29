import { ChineseZodiacElements } from './types/ChineseZodiacElements'
import { ChineseZodiacSigns } from './types/ChineseZodiacSigns'
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
  return getAllChineseZodiacSigns().get(sign)
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
      return getAllChineseZodiacSigns().get(ChineseZodiacSigns.Rat)
    case 1:
      return getAllChineseZodiacSigns().get(ChineseZodiacSigns.Ox)
    case 2:
      return getAllChineseZodiacSigns().get(ChineseZodiacSigns.Tiger)
    case 3:
      return getAllChineseZodiacSigns().get(ChineseZodiacSigns.Rabbit)
    case 4:
      return getAllChineseZodiacSigns().get(ChineseZodiacSigns.Dragon)
    case 5:
      return getAllChineseZodiacSigns().get(ChineseZodiacSigns.Snake)
    case 6:
      return getAllChineseZodiacSigns().get(ChineseZodiacSigns.Horse)
    case 7:
      return getAllChineseZodiacSigns().get(ChineseZodiacSigns.Goat)
    case 8:
      return getAllChineseZodiacSigns().get(ChineseZodiacSigns.Monkey)
    case 9:
      return getAllChineseZodiacSigns().get(ChineseZodiacSigns.Rooster)
    case 10:
      return getAllChineseZodiacSigns().get(ChineseZodiacSigns.Dog)
    case 11:
      return getAllChineseZodiacSigns().get(ChineseZodiacSigns.Pig)
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
  return Array.from(getAllChineseZodiacSigns().values()).filter(
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
  return Array.from(getAllChineseZodiacSigns().values()).filter(
    (sign) => sign.chineseZodiacElements === element
  )
}

/**
 * Gets all zodiac signs and details for each sign.
 * @returns List of zodiac signs each as a zodiac sign object.
 */
export const getAllChineseZodiacSigns = () => {
  const zodiacSigns = new Map<ChineseZodiacSigns, ChineseZodiacModel>()

  zodiacSigns.set(
    ChineseZodiacSigns.Dog,
    new ChineseZodiacModel(
      'gòu',
      ChineseZodiacSigns.Dog,
      'Dog people are loyal & can always keep a secret. Sometimes they worry too much.',
      ChineseZodiacElements.Earth,
      YinYang.Yang
    )
  )

  zodiacSigns.set(
    ChineseZodiacSigns.Dragon,
    new ChineseZodiacModel(
      'lóng',
      ChineseZodiacSigns.Dragon,
      'Dragon people have good health & lots of energy. They are good friends because they listen well.',
      ChineseZodiacElements.Earth,
      YinYang.Yang
    )
  )

  zodiacSigns.set(
    ChineseZodiacSigns.Goat,
    new ChineseZodiacModel(
      'yáng',
      ChineseZodiacSigns.Goat,
      'Goat people are very good artists. They ask many questions, like nice things & are very wise.',
      ChineseZodiacElements.Earth,
      YinYang.Yin
    )
  )

  zodiacSigns.set(
    ChineseZodiacSigns.Horse,
    new ChineseZodiacModel(
      'mǎ',
      ChineseZodiacSigns.Horse,
      'Horse people are popular, cheerful & quick to compliment others. They can work very hard.',
      ChineseZodiacElements.Fire,
      YinYang.Yang
    )
  )

  zodiacSigns.set(
    ChineseZodiacSigns.Monkey,
    new ChineseZodiacModel(
      'hóu',
      ChineseZodiacSigns.Monkey,
      'Monkey people are very funny. They can always make others laugh & are good problem solvers.',
      ChineseZodiacElements.Metal,
      YinYang.Yang
    )
  )

  zodiacSigns.set(
    ChineseZodiacSigns.Ox,
    new ChineseZodiacModel(
      'niú',
      ChineseZodiacSigns.Ox,
      'Ox people are dependable & calm. They are good listeners & have very strong ideas.',
      ChineseZodiacElements.Earth,
      YinYang.Yin
    )
  )

  zodiacSigns.set(
    ChineseZodiacSigns.Pig,
    new ChineseZodiacModel(
      'zhū',
      ChineseZodiacSigns.Pig,
      'Pig people are very good students. They are honest & brave.They always finish a project or assignment.',
      ChineseZodiacElements.Water,
      YinYang.Yin
    )
  )

  zodiacSigns.set(
    ChineseZodiacSigns.Rabbit,
    new ChineseZodiacModel(
      'tù',
      ChineseZodiacSigns.Rabbit,
      'Rabbit people are nice to be around. They like to talk and many people trust them.',
      ChineseZodiacElements.Wood,
      YinYang.Yin
    )
  )

  zodiacSigns.set(
    ChineseZodiacSigns.Rat,
    new ChineseZodiacModel(
      'shǔ',
      ChineseZodiacSigns.Rat,
      'Rat people are very popular. They like to invent things and are good artists.',
      ChineseZodiacElements.Water,
      YinYang.Yang
    )
  )

  zodiacSigns.set(
    ChineseZodiacSigns.Rooster,
    new ChineseZodiacModel(
      'xióng jī',
      ChineseZodiacSigns.Rooster,
      'Rooster people are hardworkers. They have many talents & think deep thoughts.',
      ChineseZodiacElements.Metal,
      YinYang.Yin
    )
  )

  zodiacSigns.set(
    ChineseZodiacSigns.Snake,
    new ChineseZodiacModel(
      'shé',
      ChineseZodiacSigns.Snake,
      'Snake people love good books, food, music & plays. They have good luck with money.',
      ChineseZodiacElements.Fire,
      YinYang.Yin
    )
  )

  zodiacSigns.set(
    ChineseZodiacSigns.Tiger,
    new ChineseZodiacModel(
      'hǔ',
      ChineseZodiacSigns.Tiger,
      'Tiger people are brave. They are respected for their deep thoughts & courageous actions.',
      ChineseZodiacElements.Wood,
      YinYang.Yang
    )
  )

  return zodiacSigns
}
