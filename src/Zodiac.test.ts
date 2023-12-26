import { describe, expect, test } from '@jest/globals'
import { getAllZodiacSigns } from "./Zodiac"

describe('Zodiac', () => {
    describe('getAllZodiacSigns', () => {
        test('returns 12 signs', () => {
            var signs = getAllZodiacSigns()
            expect(signs.size)?.toBe(12)
        })
    })
  })