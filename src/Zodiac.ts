import { Months } from './types/Months'
import { ZodiacDate } from './types/ZodiacDate'
import { ZodiacModel } from './types/ZodiacModel'
import { ZodiacSigns } from './types/ZodiacSigns'

/**
 * Get details of the zodiac sign supplied.
 * @param sign The zodiac sign that you want more details about.
 * @returns A zodiac sign object.
 */
export const getZodiacSign = (sign: ZodiacSigns): ZodiacModel | undefined => {
  return getAllZodiacSigns().get(sign)
}

/**
 * Gets the zodiac sign for the date supplied.
 * @param requestedDateTime The date for which you want the zodiac sign.
 * @returns A zodiac sign object.
 */
export const getZodiacSignForDate = (
  requestedDateTime: Date
): ZodiacModel | undefined => {
  return Array.from(getAllZodiacSigns().values())
    .filter(
      (sign) =>
        (sign.start.month === requestedDateTime.getMonth() + 1 &&
          requestedDateTime.getDate() >= sign.start.date) ||
        (sign.end.month === requestedDateTime.getMonth() + 1 &&
          requestedDateTime.getDate() <= sign.end.date)
    )
    .at(0)
}

/**
 * Gets all zodiac signs and details for each sign.
 * @returns List of zodiac signs each as a zodiac sign object.
 */
export const getAllZodiacSigns = (): Map<ZodiacSigns, ZodiacModel> => {
  const zodiacSigns = new Map<ZodiacSigns, ZodiacModel>()

  zodiacSigns.set(
    ZodiacSigns.Pisces,
    new ZodiacModel(
      ZodiacSigns.Pisces,
      'The Fish',
      new ZodiacDate(19, Months.February),
      new ZodiacDate(20, Months.March)
    )
  )

  zodiacSigns.set(
    ZodiacSigns.Virgo,
    new ZodiacModel(
      ZodiacSigns.Virgo,
      'The Virgin',
      new ZodiacDate(23, Months.August),
      new ZodiacDate(22, Months.September)
    )
  )

  zodiacSigns.set(
    ZodiacSigns.Taurus,
    new ZodiacModel(
      ZodiacSigns.Taurus,
      'The Bull',
      new ZodiacDate(20, Months.April),
      new ZodiacDate(20, Months.May)
    )
  )

  zodiacSigns.set(
    ZodiacSigns.Scorpio,
    new ZodiacModel(
      ZodiacSigns.Scorpio,
      'The Scorpion',
      new ZodiacDate(23, Months.October),
      new ZodiacDate(21, Months.November)
    )
  )

  zodiacSigns.set(
    ZodiacSigns.Sagittarius,
    new ZodiacModel(
      ZodiacSigns.Sagittarius,
      'The Archer',
      new ZodiacDate(22, Months.November),
      new ZodiacDate(21, Months.December)
    )
  )

  zodiacSigns.set(
    ZodiacSigns.Libra,
    new ZodiacModel(
      ZodiacSigns.Libra,
      'The Scales',
      new ZodiacDate(23, Months.September),
      new ZodiacDate(22, Months.October)
    )
  )

  zodiacSigns.set(
    ZodiacSigns.Leo,
    new ZodiacModel(
      ZodiacSigns.Leo,
      'The Lion',
      new ZodiacDate(23, Months.July),
      new ZodiacDate(22, Months.August)
    )
  )

  zodiacSigns.set(
    ZodiacSigns.Gemini,
    new ZodiacModel(
      ZodiacSigns.Gemini,
      'The Twins',
      new ZodiacDate(21, Months.May),
      new ZodiacDate(20, Months.June)
    )
  )

  zodiacSigns.set(
    ZodiacSigns.Capricorn,
    new ZodiacModel(
      ZodiacSigns.Capricorn,
      'The Goat',
      new ZodiacDate(22, Months.December),
      new ZodiacDate(19, Months.January)
    )
  )

  zodiacSigns.set(
    ZodiacSigns.Cancer,
    new ZodiacModel(
      ZodiacSigns.Cancer,
      'The Crab',
      new ZodiacDate(21, Months.June),
      new ZodiacDate(22, Months.July)
    )
  )

  zodiacSigns.set(
    ZodiacSigns.Aquarius,
    new ZodiacModel(
      ZodiacSigns.Aquarius,
      'The Water-Bearer',
      new ZodiacDate(20, Months.January),
      new ZodiacDate(18, Months.February)
    )
  )

  zodiacSigns.set(
    ZodiacSigns.Aries,
    new ZodiacModel(
      ZodiacSigns.Aries,
      'The Ram',
      new ZodiacDate(21, Months.March),
      new ZodiacDate(19, Months.April)
    )
  )

  return zodiacSigns
}
