import equals from "./equals.ts";
import contains from "./contains.ts";
import blacklist from "./blacklist.ts";
import escape from "./escape.ts";


// validators
import isAfter from "./isAfter.ts";
import isAlpha from "./isAlpha.ts";
import isAlphanumeric from "./isAlphanumeric.ts";
import isAscii from "./isAscii.ts";
import isBase32 from "./isBase32.ts";
import isBase64 from "./isBase64.ts";
import isBefore from "./isBefore.ts";
import isBIC from "./isBIC.ts";
import isBoolean from "./isBoolean.ts";
import isBtcAddress from "./isBtcAddress.ts";
import isByteLength from "./isByteLength.ts";
import isCreditCard from "./isCreditCard.ts";
import isCurrency from "./isCurrency.ts";
import isDataURI from "./isDataURI.ts";
import isDate from "./isDate.ts";
import isDecimal from "./isDecimal.ts";
import isDivisibleBy from "./isDivisibleBy.ts";
import isEAN from "./isEAN.ts";
import isEmail from "./isEmail.ts";
import isEmpty from "./isEmpty.ts";
import isEthereumAddress from "./isEthereumAddress.ts";
import isFloat from "./isFloat.ts";
import isFullWidth from "./isFullWidth.ts";
import isFQDN from "./isFQDN.ts";
import isHalfWidth from "./isHalfWidth.ts";
import isHash from "./isHash.ts";
import isHexadecimal from "./isHexadecimal.ts";
import isHexColor from "./isHexColor.ts";
import isHSL from "./isHSL.ts";
import isIBAN from "./isIBAN.ts";
import isIdentityCard from './isIdentityCard.ts'
import isIn from "./isIn.ts";
import isInt from "./isInt.ts";
import isIP from "./isIP.ts";
import isIPRange from "./isIPRange.ts";
import isISBN from "./isISBN.ts";
import isISIN from "./isISIN.ts";
import isISO31661Alpha2 from "./isISO31661Alpha2.ts";
import isISO31661Alpha3 from "./isISO31661Alpha3.ts";
import isISO8601 from "./isISO8601.ts";
import isISRC from "./isISRC.ts";
import isISSN from "./isISSN.ts";
import isJSON from "./isJSON.ts";
import isJWT from "./isJWT.ts";
import isLatLong from "./isLatLong.ts";
import isLocale from "./isLocale.ts";
import isLowerCase from "./isLowerCase.ts";
import isMACAddress from "./isMACAddress.ts";
import isMagnetURI from "./isMagnetURI.ts";
import isMimeType from "./isMimeType.ts";
import isMongoId from "./isMongoId.ts";
import isMobilePhone from "./isMobilePhone.ts";
import isMultibyte from "./isMultibyte.ts";
import isNumeric from "./isNumeric.ts";
import isOctal from "./isOctal.ts";
import isPassportNumber from "./isPassportNumber.ts";
import isPort from "./isPort.ts";
import isPostalCode from "./isPostalCode.ts";
import isRFC3339 from "./isRFC3339.ts";
import isRgbColor from "./isRgbColor.ts";
import isSemVer from "./isSemVer.ts";
import isSlug from "./isSlug.ts";
import isSurrogatePair from "./isSurrogatePair.ts";
import isUpperCase from "./isUpperCase.ts";
import isURL from "./isURL.ts";
import isUUID from "./isUUID.ts";
import isVariableWidth from "./isVariableWidth.ts";
import isWhitelisted from "./isWhitelisted.ts";
import matches from "./matches.ts";
import isMD5 from "./isMD5.ts";

// For testing (resolving keys as string)
interface ValidatorMap {
    [key: string]: any;
}

export const validator: ValidatorMap = {
    equals,
    contains,
    blacklist,
    escape,
    isAfter,
    isAlpha,
    isAlphanumeric,
    isAscii,
    isBase32,
    isBase64,
    isBefore,
    isBIC,
    isBoolean,
    isBtcAddress,
    isByteLength,
    isCreditCard,
    isCurrency,
    isDataURI,
    isDate,
    isDecimal,
    isDivisibleBy,
    isEAN,
    isEmail,
    isEmpty,
    isEthereumAddress,
    isFloat,
    isFQDN,
    isFullWidth,
    isHalfWidth,
    isHash,
    isHexadecimal,
    isHexColor,
    isHSL,
    isIBAN,
    isIdentityCard,
    isIn,
    isInt,
    isISIN,
    isISO31661Alpha2,
    isISO31661Alpha3,
    isISO8601,
    isISBN,
    isISRC,
    isISSN,
    isJSON,
    isIP,
    isIPRange,
    isJWT,
    isLatLong,
    isLocale,
    isLowerCase,
    isMACAddress,
    isMagnetURI,
    isMimeType,
    isMongoId,
    isMobilePhone,
    isMultibyte,
    isMD5,
    isNumeric,
    isOctal,
    isPassportNumber,
    isPort,
    isPostalCode,
    isRFC3339,
    isRgbColor,
    isSemVer,
    isSlug,
    isSurrogatePair,
    isUpperCase,
    isURL,
    isUUID,
    isVariableWidth,
    isWhitelisted,
    matches
};
