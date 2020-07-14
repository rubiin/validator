import {IsNumericOptions} from "../interface/isNumericOptions.ts";

const numeric: RegExp = /^[+-]?([0-9]*[.])?[0-9]+$/;
const numericNoSymbols: RegExp = /^[0-9]+$/;

export default function isNumeric(
  str: string,
  options: IsNumericOptions,
): boolean {
  if (options && options.no_symbols) {
    return numericNoSymbols.test(str);
  }
  return numeric.test(str);
}
