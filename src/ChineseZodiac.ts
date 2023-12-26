import { ChineseZodiacElements } from "./types/ChineseZodiacElements";
import { ChineseZodiacSigns } from "./types/ChineseZodiacSigns";
import { YinYang } from "./types/YinYang";
import { ZodiacDate } from "./types/ZodiacDate";
import { ChineseZodiacModel } from "./types/ZodiacModel";
import { ZodiacSigns } from "./types/ZodiacSigns";

// ChineseZodiacModel GetZodiacSignForDate(DateTime requestedDateTime)
// ChineseZodiacModel GetZodiacSign(ChineseZodiacSigns requestedZodiacSign)
// List<ChineseZodiacModel> GetAllZodiacSigns()
// List<ChineseZodiacModel> GetAllZodiacSignsForAnElement(ChineseZodiacElements chineseZodiacElements)
// ChineseZodiacElements GetChineseZodiacElementBasedOnYear(int year)
// List<ChineseZodiacModel> GetAllZodiacSignsForYinYang(YinYang yinOrYang)

export const getChineseZodiacSign = (sign: ChineseZodiacSigns): ChineseZodiacModel | undefined => {
    return getAllChineseZodiacSigns().get(sign);
} 


// new ZodiacDate(6, 2003),
// new ZodiacDate(5, 2023),

export const getAllChineseZodiacSigns = () => {    
    const zodiacSigns = new Map<ChineseZodiacSigns, ChineseZodiacModel>();

    zodiacSigns.set(ChineseZodiacSigns.Rat, new ChineseZodiacModel(
        ChineseZodiacSigns.Rat.toString(),
        "The Fish",
        "",
        ChineseZodiacElements.Earth,
        YinYang.Yang
    )); 

    return zodiacSigns;
}