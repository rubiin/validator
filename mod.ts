import equals from './src/lib/equals.ts';
import contains from './src/lib/contains.ts';
import blacklist from './src/lib/blacklist.ts';
import escape from './src/lib/escape.ts';
import toDate from './src/lib/toDate.ts';
import toFloat from './src/lib/toFloat.ts';
import toInt from './src/lib/toInt.ts';
import toBoolean from './src/lib/toBoolean.ts';
import matches from './src/lib/matches.ts';

// validator version
const version = '1.0.0.ts';

// validators
import isAlpha, { locales as isAlphaLocales } from './src/lib/isAlpha.ts';
import isAlphanumeric, { locales as isAlphanumericLocales} from './src/lib/isAlphanumeric.ts';
import isAscii from './src/lib/isAscii.ts';
import isBase32 from './src/lib/isBase32.ts';
import isFQDN from './src/lib/isFQDN.ts';
import isLowercase from './src/lib/isLowercase.ts';

import isFullWidth from './src/lib/isFullWidth.ts';
import isHalfWidth from './src/lib/isHalfWidth.ts';
import isInt from './src/lib/isInt.ts';
import isFloat, { locales as isFloatLocales } from './src/lib/isFloat.ts';
import isDecimal from './src/lib/isDecimal.ts';
import isHexadecimal from './src/lib/isHexadecimal.ts';
import isDivisibleBy from './src/lib/isDivisibleBy.ts';
import isEAN from './src/lib/isEAN.ts'
import isEmpty from './src/lib/isEmpty.ts'

import isHexColor from './src/lib/isHexColor.ts';
import isHSL from './src/lib/isHSL.ts';

import isISRC from './src/lib/isISRC.ts';
import isISIN from './src/lib/isISIN.ts';

import isIBAN from './src/lib/isIBAN.ts';
import isBIC from './src/lib/isBIC.ts';
import isJWT from './src/lib/isJWT.ts';

import isEthereumAddress from './src/lib/isEthereumAddress.ts';

import isJSON from './src/lib/isJSON.ts'

import isISO8601 from './src/lib/isISO8601.ts';
import isISO31661Alpha2 from './src/lib/isISO31661Alpha2.ts';
import isISO31661Alpha3 from './src/lib/isISO31661Alpha3.ts';
import isLocale from './src/lib/isLocale.ts';
import isLatLong from './src/lib/isLatLong.ts';
import isIdentityCard from './src/lib/isIdentityCard.ts';

const validator = {
  version,
  toDate,
  toFloat,
  escape,
  blacklist,
  toInt,
  toBoolean,
  equals,
  contains,
  matches,
  isAlpha,
  isAlphaLocales,
  isAlphanumeric,
  isAlphanumericLocales,
  isAscii,
  isBase32,
  isBIC,
  isDecimal,
  isDivisibleBy,
  isEAN,
  isEmpty,
  isEthereumAddress,
  isFloat,
  isFQDN,
  isFloatLocales,
  isFullWidth,
  isHalfWidth,
  isHexadecimal,
  isHexColor,
  isHSL,
  isIBAN,
  isIdentityCard,
  isInt,
  isISRC,
  isISIN,
  isJSON,
  isJWT,
  isISO8601,
  isISO31661Alpha2,
  isISO31661Alpha3,
  isLocale,
  isLowercase,
  isLatLong,
};

export default validator;