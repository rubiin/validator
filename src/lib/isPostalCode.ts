// common patterns
const threeDigit = /^\d{3}$/;
const fourDigit = /^\d{4}$/;
const fiveDigit = /^\d{5}$/;
const sixDigit = /^\d{6}$/;

export enum PostalCodeLocaleEnum {
    AD = 'AD',
    AT = 'AT',
    AU = 'AU',
    BE = 'BE',
    BG = 'BG',
    BR = 'BR',
    CA = 'CA',
    CH = 'CH',
    CZ = 'CZ',
    DE = 'DE',
    DK = 'DK',
    DZ = 'DZ',
    EE = 'EE',
    ES = 'ES',
    FI = 'FI',
    FR = 'FR',
    GB = 'GB',
    GR = 'GR',
    HR = 'HR',
    HU = 'HU',
    ID = 'ID',
    IE = 'IE',
    IL = 'IL',
    IN = 'IN',
    IS = 'IS',
    IT = 'IT',
    JP = 'JP',
    KE = 'KE',
    LI = 'LI',
    LT = 'LT',
    LU = 'LU',
    LV = 'LV',
    MX = 'MX',
    MT = 'MT',
    NL = 'NL',
    NO = 'NO',
    NP = 'NP',
    NZ = 'NZ',
    PL = 'PL',
    PR = 'PR',
    PT = 'PT',
    RO = 'RO',
    RU = 'RU',
    SA = 'SA',
    SE = 'SE',
    SI = 'SI',
    SK = 'SK',
    TN = 'TN',
    TW = 'TW',
    UA = 'UA',
    US = 'US',
    ZA = 'ZA',
    ZM = 'ZM',

    ANY = 'ANY'
}

const patterns: { [key: string]: RegExp } = {
    [PostalCodeLocaleEnum.AD]: /^AD\d{3}$/,
    [PostalCodeLocaleEnum.AT]: fourDigit,
    [PostalCodeLocaleEnum.AU]: fourDigit,
    [PostalCodeLocaleEnum.BE]: fourDigit,
    [PostalCodeLocaleEnum.BG]: fourDigit,
    [PostalCodeLocaleEnum.BR]: /^\d{5}-\d{3}$/,
    [PostalCodeLocaleEnum.CA]: /^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJ-NPRSTV-Z][\s\-]?\d[ABCEGHJ-NPRSTV-Z]\d$/i,
    [PostalCodeLocaleEnum.CH]: fourDigit,
    [PostalCodeLocaleEnum.CZ]: /^\d{3}\s?\d{2}$/,
    [PostalCodeLocaleEnum.DE]: fiveDigit,
    [PostalCodeLocaleEnum.DK]: fourDigit,
    [PostalCodeLocaleEnum.DZ]: fiveDigit,
    [PostalCodeLocaleEnum.EE]: fiveDigit,
    [PostalCodeLocaleEnum.ES]: fiveDigit,
    [PostalCodeLocaleEnum.FI]: fiveDigit,
    [PostalCodeLocaleEnum.FR]: /^\d{2}\s?\d{3}$/,
    [PostalCodeLocaleEnum.GB]: /^(gir\s?0aa|[a-z]{1,2}\d[\da-z]?\s?(\d[a-z]{2})?)$/i,
    [PostalCodeLocaleEnum.GR]: /^\d{3}\s?\d{2}$/,
    [PostalCodeLocaleEnum.HR]: /^([1-5]\d{4}$)/,
    [PostalCodeLocaleEnum.HU]: fourDigit,
    [PostalCodeLocaleEnum.ID]: fiveDigit,
    [PostalCodeLocaleEnum.IE]: /^(?!.*(?:o))[A-z]\d[\dw]\s\w{4}$/i,
    [PostalCodeLocaleEnum.IL]: fiveDigit,
    [PostalCodeLocaleEnum.IN]: /^((?!10|29|35|54|55|65|66|86|87|88|89)[1-9][0-9]{5})$/,
    [PostalCodeLocaleEnum.IS]: threeDigit,
    [PostalCodeLocaleEnum.IT]: fiveDigit,
    [PostalCodeLocaleEnum.JP]: /^\d{3}\-\d{4}$/,
    [PostalCodeLocaleEnum.KE]: fiveDigit,
    [PostalCodeLocaleEnum.LI]: /^(948[5-9]|949[0-7])$/,
    [PostalCodeLocaleEnum.LT]: /^LT\-\d{5}$/,
    [PostalCodeLocaleEnum.LU]: fourDigit,
    [PostalCodeLocaleEnum.LV]: /^LV\-\d{4}$/,
    [PostalCodeLocaleEnum.MX]: fiveDigit,
    [PostalCodeLocaleEnum.MT]: /^[A-Za-z]{3}\s{0,1}\d{4}$/,
    [PostalCodeLocaleEnum.NL]: /^\d{4}\s?[a-z]{2}$/i,
    [PostalCodeLocaleEnum.NO]: fourDigit,
    [PostalCodeLocaleEnum.NP]: /^(10|21|22|32|33|34|44|45|56|57)\d{3}$|^(977)$/i,
    [PostalCodeLocaleEnum.NZ]: fourDigit,
    [PostalCodeLocaleEnum.PL]: /^\d{2}\-\d{3}$/,
    [PostalCodeLocaleEnum.PR]: /^00[679]\d{2}([ -]\d{4})?$/,
    [PostalCodeLocaleEnum.PT]: /^\d{4}\-\d{3}?$/,
    [PostalCodeLocaleEnum.RO]: sixDigit,
    [PostalCodeLocaleEnum.RU]: sixDigit,
    [PostalCodeLocaleEnum.SA]: fiveDigit,
    [PostalCodeLocaleEnum.SE]: /^[1-9]\d{2}\s?\d{2}$/,
    [PostalCodeLocaleEnum.SI]: fourDigit,
    [PostalCodeLocaleEnum.SK]: /^\d{3}\s?\d{2}$/,
    [PostalCodeLocaleEnum.TN]: fourDigit,
    [PostalCodeLocaleEnum.TW]: /^\d{3}(\d{2})?$/,
    [PostalCodeLocaleEnum.UA]: fiveDigit,
    [PostalCodeLocaleEnum.US]: /^\d{5}(-\d{4})?$/,
    [PostalCodeLocaleEnum.ZA]: fourDigit,
    [PostalCodeLocaleEnum.ZM]: fiveDigit
};

export const locales = Object.keys(patterns);

export default function isPostalCode(str: string, locale: string): boolean {
    locale = locale.toUpperCase();
    if (locale in patterns) {
        return patterns[locale].test(str);
    } else if (locale === PostalCodeLocaleEnum.ANY) {
        for (const key in patterns) {
            // https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md#ignoring-code-for-coverage-purposes
            // istanbul ignore else
            if (patterns.hasOwnProperty(key)) {
                const pattern = patterns[key];
                if (pattern.test(str)) {
                    return true;
                }
            }
        }
        return false;
    }
    throw new Error(`Invalid locale '${locale}'`);
}
