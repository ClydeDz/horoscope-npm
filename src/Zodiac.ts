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
    return Array.from(getAllZodiacSigns().values()).filter(sign => 
        (sign.start.month === requestedDateTime.getMonth()+1 && requestedDateTime.getDate() >= sign.start.date) 
        || (sign.end.month === requestedDateTime.getMonth()+1 && requestedDateTime.getDate() <= sign.end.date))
        .at(0);
} 

export const getAllZodiacSigns = () => {    
    const zodiacSigns = new Map<ZodiacSigns, ZodiacModel>();

    zodiacSigns.set(ZodiacSigns.Pisces, new ZodiacModel(
        ZodiacSigns[ZodiacSigns.Pisces], "The Fish", new ZodiacDate(19, Months.February), new ZodiacDate(20, Months.March),
    )); 

    zodiacSigns.set(ZodiacSigns.Virgo, new ZodiacModel(
        ZodiacSigns[ZodiacSigns.Virgo], "The Virgin", new ZodiacDate(23, Months.August), new ZodiacDate(22, Months.September)
    )); 

    zodiacSigns.set(ZodiacSigns.Taurus, new ZodiacModel(
        ZodiacSigns[ZodiacSigns.Taurus], "The Bull", new ZodiacDate(20, Months.April), new ZodiacDate(20, Months.May)
    )); 

    zodiacSigns.set(ZodiacSigns.Scorpio, new ZodiacModel(
        ZodiacSigns[ZodiacSigns.Scorpio], "The Scorpion", new ZodiacDate(23, Months.October), new ZodiacDate(21, Months.November)
    )); 

    zodiacSigns.set(ZodiacSigns.Sagittarius, new ZodiacModel(
        ZodiacSigns[ZodiacSigns.Sagittarius], "The Archer", new ZodiacDate(22, Months.November), new ZodiacDate(21, Months.December)
    )); 

    zodiacSigns.set(ZodiacSigns.Libra, new ZodiacModel(
        ZodiacSigns[ZodiacSigns.Libra], "The Scales", new ZodiacDate(23, Months.September), new ZodiacDate(22, Months.October)
    ));

    zodiacSigns.set(ZodiacSigns.Leo, new ZodiacModel(
        ZodiacSigns[ZodiacSigns.Leo], "The Lion", new ZodiacDate(23, Months.July), new ZodiacDate(22, Months.August)
    )); 

    zodiacSigns.set(ZodiacSigns.Gemini, new ZodiacModel(
        ZodiacSigns[ZodiacSigns.Gemini], "The Twins", new ZodiacDate(21, Months.May), new ZodiacDate(20, Months.June)
    )); 

    zodiacSigns.set(ZodiacSigns.Capricorn, new ZodiacModel(
        ZodiacSigns[ZodiacSigns.Capricorn], "The Goat", new ZodiacDate(22, Months.December), new ZodiacDate(19, Months.January)
    )); 

    zodiacSigns.set(ZodiacSigns.Cancer, new ZodiacModel(
        ZodiacSigns[ZodiacSigns.Cancer], "The Crab", new ZodiacDate(21, Months.June), new ZodiacDate(22, Months.July)
    )); 

    zodiacSigns.set(ZodiacSigns.Aquarius, new ZodiacModel(
        ZodiacSigns[ZodiacSigns.Aquarius], "The Water-Bearer", new ZodiacDate(20, Months.January), new ZodiacDate(18, Months.February)
    )); 

    zodiacSigns.set(ZodiacSigns.Aries, new ZodiacModel(
        ZodiacSigns[ZodiacSigns.Aries], "The Ram", new ZodiacDate(21, Months.March), new ZodiacDate(19, Months.April)
    )); 

    return zodiacSigns;
}