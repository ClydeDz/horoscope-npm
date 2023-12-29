import { describe, expect, test } from '@jest/globals'
import {
  getZodiacSignForDate,
  getAllZodiacSigns,
  getZodiacSign,
} from './Zodiac'
import { ZodiacSigns } from './types/ZodiacSigns'

describe('Zodiac', () => {
  describe('getAllZodiacSigns', () => {
    test('returns 12 signs', () => {
      const signs = getAllZodiacSigns()
      expect(signs.length)?.toBe(12)
    })
  })

  describe('getZodiacSignForDate', () => {
    test.each([
      [ZodiacSigns.Aquarius, '12 February 1995'],
      [ZodiacSigns.Pisces, '3 March 1995'],
      [ZodiacSigns.Pisces, '28 February 1995'],
      [ZodiacSigns.Scorpio, '23 October 1995'],
    ])('returns %s when date supplied is %s', (zodiacSign, inputDate) => {
      const signs = getZodiacSignForDate(new Date(inputDate))
      expect(signs?.name)?.toBe(zodiacSign)
    })

    test('returns undefined for an invalid date', () => {
      const signs = getZodiacSignForDate(new Date('2 Abc 1995'))
      expect(signs?.name)?.toBe(undefined)
    })
  })

  describe('getZodiacSign', () => {
    test('returns zodiac sign details for pisces', () => {
      const sign = getZodiacSign(ZodiacSigns.Pisces)
      expect(sign?.name)?.toBe(ZodiacSigns.Pisces)
      expect(sign?.englishTranslation)?.toBe('The Fish')
      expect(sign?.duration)?.toBe('February 19 to March 20')
    })
  })
})
