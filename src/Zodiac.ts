import { ZodiacModel } from './types/ZodiacModel'
import { ZodiacSigns, getAllZodiacSignsInternal } from './types/ZodiacSigns'

/**
 * Get details of the zodiac sign supplied.
 * @param sign The zodiac sign that you want more details about.
 * @returns A zodiac sign object.
 */
export const getZodiacSign = (sign: ZodiacSigns): ZodiacModel | undefined => {
  return getAllZodiacSignsInternal().get(sign)
}

/**
 * Gets the zodiac sign for the date supplied.
 * @param requestedDateTime The date for which you want the zodiac sign.
 * @returns A zodiac sign object.
 */
export const getZodiacSignForDate = (
  requestedDateTime: Date
): ZodiacModel | undefined => {
  return Array.from(getAllZodiacSignsInternal().values())
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
export const getAllZodiacSigns = (): ZodiacModel[] => {
  return Array.from(getAllZodiacSignsInternal().values())
}
