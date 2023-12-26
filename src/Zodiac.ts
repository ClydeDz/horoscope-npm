import { Months } from "./types/Months";
import { ZodiacDate } from "./types/ZodiacDate";
import { ZodiacModel } from "./types/ZodiacModel";
import { ZodiacSigns } from "./types/ZodiacSigns";

// ZodiacModel GetZodiacSignForDate(DateTime requestedDateTime)
// ZodiacModel GetZodiacSign(ZodiacSigns requestedZodiacSign)
// List<ZodiacModel> GetAllZodiacSigns()

export const GetZodiacSign = (sign: ZodiacSigns): ZodiacModel | undefined => {
    return getAllZodiacSigns().get(sign);
} 

export const GetZodiacSignForDate = (requestedDateTime: Date) => {
    /*
    (z.ZodiacStartDate.Month == requestedDateTime.Month && requestedDateTime.Day >= z.ZodiacStartDate.Date) 
    || (z.ZodiacEndDate.Month == requestedDateTime.Month && requestedDateTime.Day <= z.ZodiacEndDate.Date));
     */
    
    var sign = getAllZodiacSigns().forEach(sign => 
        (sign.start.month === requestedDateTime.getMonth() && requestedDateTime.getDate() >= sign.start.date)
        || (sign.end.month === requestedDateTime.getMonth() && requestedDateTime.getDate() <= sign.end.date))
    return null;
} 

export const getAllZodiacSigns = () => {    
    const zodiacSigns = new Map<ZodiacSigns, ZodiacModel>();

    zodiacSigns.set(ZodiacSigns.Pisces, new ZodiacModel(
        ZodiacSigns.Pisces.toString(), "The Fish", new ZodiacDate(5, Months.March), new ZodiacDate(5, Months.March),
    )); 

    zodiacSigns.set(ZodiacSigns.Virgo, new ZodiacModel(
        ZodiacSigns.Virgo.toString(), "The Virgin", new ZodiacDate(23, 8), new ZodiacDate(22, 9)
    )); 

    zodiacSigns.set(ZodiacSigns.Taurus, new ZodiacModel(
        ZodiacSigns.Taurus.toString(), "The Bull", new ZodiacDate(20, 4), new ZodiacDate(20, 5)
    )); 

    zodiacSigns.set(ZodiacSigns.Scorpio, new ZodiacModel(
        ZodiacSigns.Scorpio.toString(), "The Scorpion", new ZodiacDate(23, 10), new ZodiacDate(21, 11)
    )); 

    zodiacSigns.set(ZodiacSigns.Sagittarius, new ZodiacModel(
        ZodiacSigns.Sagittarius.toString(), "The Archer", new ZodiacDate(22, 11), new ZodiacDate(21, 12)
    )); 

    zodiacSigns.set(ZodiacSigns.Libra, new ZodiacModel(
        ZodiacSigns.Libra.toString(), "The Scales", new ZodiacDate(23, 9), new ZodiacDate(22, 10)
    ));

    zodiacSigns.set(ZodiacSigns.Leo, new ZodiacModel(
        ZodiacSigns.Leo.toString(), "The Lion", new ZodiacDate(23, 7), new ZodiacDate(22, 8)
    )); 

    zodiacSigns.set(ZodiacSigns.Gemini, new ZodiacModel(
        ZodiacSigns.Gemini.toString(), "The Twins", new ZodiacDate(21, 5), new ZodiacDate(20, 6)
    )); 

    zodiacSigns.set(ZodiacSigns.Capricorn, new ZodiacModel(
        ZodiacSigns.Capricorn.toString(), "The Goat", new ZodiacDate(22, 12), new ZodiacDate(19, 1)
    )); 

    zodiacSigns.set(ZodiacSigns.Cancer, new ZodiacModel(
        ZodiacSigns.Cancer.toString(), "The Crab", new ZodiacDate(21, 6), new ZodiacDate(22, 7)
    )); 

    zodiacSigns.set(ZodiacSigns.Aquarius, new ZodiacModel(
        ZodiacSigns.Aquarius.toString(), "The Water-Bearer", new ZodiacDate(20, 1), new ZodiacDate(18, 2)
    )); 

    // 
    zodiacSigns.set(ZodiacSigns.Aries, new ZodiacModel(
        ZodiacSigns.Aries.toString(), "The Water-Bearer", new ZodiacDate(20, 1), new ZodiacDate(18, 2)
    )); 

    return zodiacSigns;
}