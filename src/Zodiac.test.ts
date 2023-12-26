import { describe, expect, test } from '@jest/globals'
import { getZodiacSignForDate, getAllZodiacSigns } from "./Zodiac"
import { ZodiacSigns } from './types/ZodiacSigns'

describe('Zodiac', () => {
    describe('getAllZodiacSigns', () => {
        test('returns 12 signs', () => {
            var signs = getAllZodiacSigns()
            expect(signs.size)?.toBe(12)
        }) 
    }) 

    describe('GetZodiacSignForDate', () => {
        test('returns Piscess', () => {
            var signs = getZodiacSignForDate(new Date("2 March 1995"))
            expect(signs?.name)?.toBe(ZodiacSigns[ZodiacSigns.Pisces])
        }) 

        test('returns Piscess', () => {
            var signs = getZodiacSignForDate(new Date("2 Abc 1995"))
            expect(signs?.name)?.toBe(undefined)
        }) 
    }) 
  })