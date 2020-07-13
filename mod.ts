// validator version
const version = "1.0.0-beta";

import * as validatorInterface from './src/interface/mod.ts';
import {validator} from './src/lib/mod.ts';

import {locales as isAlphaLocales,} from "./src/lib/isAlpha.ts";
import {locales as isAlphanumericLocales,} from "./src/lib/isAlphanumeric.ts";
import {locales as postalCodeLocales,} from "./src/lib/isPostalCode.ts";
import {locales as mobilePhoneLocales,} from "./src/lib/isMobilePhone.ts";
import {locales as identityCardLocales,} from './src/lib/isIdentityCard.ts'

const locales = {
    isAlphaLocales,
    isAlphanumericLocales,
    mobilePhoneLocales,
    postalCodeLocales,
    identityCardLocales
};

export {
    validator,
    validatorInterface,
    locales,
    version
}
// export validator;

