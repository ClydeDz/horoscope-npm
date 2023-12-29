import { describe, expect, test } from '@jest/globals'
import {
  getAllChineseZodiacSigns,
  getAllChineseZodiacSignsForAnElement,
  getAllChineseZodiacSignsForYinYang,
  getChineseZodiacElementBasedOnYear,
  getChineseZodiacSign,
  getChineseZodiacSignForDate,
} from './ChineseZodiac'
import { ChineseZodiacSigns } from './types/ChineseZodiacSigns'
import { ChineseZodiacElements } from './types/ChineseZodiacElements'
import { YinYang } from './types/YinYang'

describe('Chinese zodiac', () => {
  describe('getAllChineseZodiacSigns', () => {
    test('returns 12 signs', () => {
      const signs = getAllChineseZodiacSigns()
      expect(signs.size)?.toBe(12)
    })
  })

  describe('getChineseZodiacSignForDate', () => {
    test.each([
      [ChineseZodiacSigns.Dog, '2018'],
      [ChineseZodiacSigns.Dragon, '1952'],
      [ChineseZodiacSigns.Rooster, '1969'],
      [ChineseZodiacSigns.Rabbit, '1903'],
    ])('returns %s when date supplied is %s', (zodiacSign, inputDate) => {
      const signs = getChineseZodiacSignForDate(new Date(+inputDate, 3, 1))
      expect(signs?.englishTranslation)?.toBe(zodiacSign)
    })

    test('returns undefined for an invalid date', () => {
      const signs = getChineseZodiacSignForDate(new Date('2 Abc 1995'))
      expect(signs?.name)?.toBe(undefined)
    })
  })

  describe('getChineseZodiacSign', () => {
    test('returns zodiac sign details for dog', () => {
      const sign = getChineseZodiacSign(ChineseZodiacSigns.Dog)
      expect(sign?.name)?.toBe('gòu')
      expect(sign?.englishTranslation)?.toBe(ChineseZodiacSigns.Dog)
      expect(sign?.chineseZodiacElements)?.toBe(ChineseZodiacElements.Earth)
      expect(sign?.personality)?.toBe(
        'Dog people are loyal & can always keep a secret. Sometimes they worry too much.'
      )
      expect(sign?.yinYang)?.toBe(YinYang.Yang)
    })
  })

  describe('getAllChineseZodiacSignsForAnElement', () => {
    test.each([
      [4, ChineseZodiacElements.Earth],
      [2, ChineseZodiacElements.Fire],
      [2, ChineseZodiacElements.Metal],
      [2, ChineseZodiacElements.Water],
      [2, ChineseZodiacElements.Wood],
    ])(
      'returns %s zodiac signs when element supplied is %s',
      (totalSigns, element) => {
        const signs = getAllChineseZodiacSignsForAnElement(element)
        expect(signs.length).toBe(totalSigns)
      }
    )

    test('returns the correct signs when element supplied is earth', () => {
      const signs = getAllChineseZodiacSignsForAnElement(
        ChineseZodiacElements.Earth
      )
      const dog = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Dog
      )
      const dragon = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Dragon
      )
      const goat = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Goat
      )
      const ox = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Ox
      )

      expect(dog).not.toBeUndefined()
      expect(dragon).not.toBeUndefined()
      expect(goat).not.toBeUndefined()
      expect(ox).not.toBeUndefined()
    })
  })

  describe('getChineseZodiacElementBasedOnYear', () => {
    test.each([
      [2018, ChineseZodiacElements.Earth],
      [1952, ChineseZodiacElements.Water],
      [1964, ChineseZodiacElements.Wood],
      [1907, ChineseZodiacElements.Fire],
      [2000, ChineseZodiacElements.Metal],
    ])(
      'for the year %s supplied, returns zodiac element %s',
      (year, zodiacElement) => {
        const element = getChineseZodiacElementBasedOnYear(year)
        expect(element).toBe(zodiacElement)
      }
    )
  })

  describe('getAllChineseZodiacSignsForYinYang', () => {
    test.each([
      [6, YinYang.Yang],
      [6, YinYang.Yin],
    ])(
      'returns %s zodiac signs when Yin Yang supplied is %s',
      (totalSigns, yinyang) => {
        const signs = getAllChineseZodiacSignsForYinYang(yinyang)
        expect(signs.length).toBe(totalSigns)
      }
    )

    test('returns the correct signs when Yang is supplied', () => {
      const signs = getAllChineseZodiacSignsForYinYang(YinYang.Yang)
      const dog = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Dog
      )
      const dragon = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Dragon
      )
      const tiger = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Tiger
      )
      const rat = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Rat
      )
      const horse = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Horse
      )
      const monkey = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Monkey
      )

      expect(dog).not.toBeUndefined()
      expect(dragon).not.toBeUndefined()
      expect(tiger).not.toBeUndefined()
      expect(rat).not.toBeUndefined()
      expect(horse).not.toBeUndefined()
      expect(monkey).not.toBeUndefined()
    })

    test('returns the correct signs when Yin is supplied', () => {
      const signs = getAllChineseZodiacSignsForYinYang(YinYang.Yin)
      const rabbit = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Rabbit
      )
      const rooster = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Rooster
      )
      const goat = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Goat
      )
      const ox = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Ox
      )
      const pig = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Pig
      )
      const snake = signs.find(
        (val) => val.englishTranslation === ChineseZodiacSigns.Snake
      )

      expect(rabbit).not.toBeUndefined()
      expect(rooster).not.toBeUndefined()
      expect(goat).not.toBeUndefined()
      expect(ox).not.toBeUndefined()
      expect(pig).not.toBeUndefined()
      expect(snake).not.toBeUndefined()
    })
  })
})
