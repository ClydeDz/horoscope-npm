import { Months } from './Months'
import { ZodiacDate } from './ZodiacDate'
import { ZodiacModel } from './ZodiacModel'

export enum ZodiacSigns {
  Pisces = 'Pisces',
  Aquarius = 'Aquarius',
  Virgo = 'Virgo',
  Taurus = 'Taurus',
  Scorpio = 'Scorpio',
  Sagittarius = 'Sagittarius',
  Libra = 'Libra',
  Leo = 'Leo',
  Gemini = 'Gemini',
  Capricorn = 'Capricorn',
  Cancer = 'Cancer',
  Aries = 'Aries',
}

/**
 * @internal
 */
export const getAllZodiacSignsInternal = (): Map<ZodiacSigns, ZodiacModel> => {
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
