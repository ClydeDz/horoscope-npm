import { ChineseZodiacElements } from './ChineseZodiacElements'
import { Months } from './Months'
import { YinYang } from './YinYang'
import { ZodiacDate } from './ZodiacDate'

interface IZodiacModel {
  name: string
  englishTranslation: string
}

class BaseZodiacModel {
  name: string
  englishTranslation: string

  constructor(name: string, englishTranslation: string) {
    this.name = name
    this.englishTranslation = englishTranslation
  }
}

export class ZodiacModel extends BaseZodiacModel implements IZodiacModel {
  start: ZodiacDate
  end: ZodiacDate
  readonly duration: string

  constructor(
    name: string,
    englishTranslation: string,
    startDate: ZodiacDate,
    endDate: ZodiacDate
  ) {
    super(name, englishTranslation)
    this.start = startDate
    this.end = endDate
    this.duration = `${Months[this.start.month]} ${this.start.date} to ${
      Months[this.end.month]
    } ${this.end.date}`
  }
}

export class ChineseZodiacModel
  extends BaseZodiacModel
  implements IZodiacModel
{
  chineseZodiacElements: ChineseZodiacElements
  yinYang: YinYang
  personality: string

  constructor(
    name: string,
    englishTranslation: string,
    personality: string,
    chineseZodiacElements: ChineseZodiacElements,
    yinYang: YinYang
  ) {
    super(name, englishTranslation)
    this.personality = personality
    this.chineseZodiacElements = chineseZodiacElements
    this.yinYang = yinYang
  }
}
