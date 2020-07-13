import {IsEmptyOptions} from "../interface/isEmptyOptions.ts";

const defaultOptions: IsEmptyOptions = {
  ignore_whitespace: false,
};

export default function isEmpty(
  str: string,
  options: IsEmptyOptions = defaultOptions,
): boolean {
  str = options.ignore_whitespace ? str.trim() : str;
  return str.length === 0;
}
