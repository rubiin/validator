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
const version = '1.0.0';

// validators
import isAlpha, { locales as isAlphaLocales } from './src/lib/isAlpha.ts';
import isAlphanumeric, { locales as isAlphanumericLocales} from './src/lib/isAlphanumeric.ts';
import isAscii from './src/lib/isAscii.ts';
import isBase32 from './src/lib/isBase32.ts';
import isFQDN from './src/lib/isFQDN.ts';

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
  isFQDN,
};

export default validator;