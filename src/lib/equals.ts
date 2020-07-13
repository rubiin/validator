import merge from "./util/merge.ts";
import {IsEqualsOptions} from "../interface/isEqualsOptions.ts";

const defaultEqualsOptions: IsEqualsOptions = {
  trim: false,
  ignore_case: false,
};

export default function equals(
  str1: string,
  str2: string,
  options: IsEqualsOptions = defaultEqualsOptions,
): boolean {
  merge(options, defaultEqualsOptions);
  if (options.trim) {
    str1 = str1.trim();
    str2 = str2.trim();
  }
  return options.ignore_case
    ? str1.toLowerCase() === str2.toLowerCase()
    : str1 === str2;
}
