import { ChineseZodiacElements } from './ChineseZodiacElements'
import { YinYang } from './YinYang'
import { ChineseZodiacModel } from './ZodiacModel'

export enum ChineseZodiacSigns {
  Rat = 'Rat',
  Ox = 'Ox',
  Tiger = 'Tiger',
  Rabbit = 'Rabbit',
  Dragon = 'Dragon',
  Snake = 'Snake',
  Horse = 'Horse',
  Goat = 'Goat',
  Monkey = 'Monkey',
  Rooster = 'Rooster',
  Dog = 'Dog',
  Pig = 'Pig',
}

/**
 * @internal
 */
export const getAllChineseZodiacSignsInternal = (): Map<
  ChineseZodiacSigns,
  ChineseZodiacModel
> => {
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
