import {validator} from "../mod.ts";
import {PostalCodeLocaleEnum} from "../src/lib/isPostalCode.ts";
import * as log from "https://deno.land/std/log/mod.ts";

const value = '1234AB';
const locale = PostalCodeLocaleEnum.NL
const isPostalCode = validator.isPostalCode(value, locale);

log.info(`Is ${value} a postal code: ${isPostalCode}`);

