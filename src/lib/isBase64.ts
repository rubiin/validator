import merge from "./util/merge.ts";
import {IsBase64Options} from "../interface/isBase64Options.ts";

const notBase64: RegExp = /[^A-Z0-9+\/=]/i;
const urlSafeBase64: RegExp = /^[A-Z0-9_\-]+$/i;

const defaultIsBase64Options: IsBase64Options = {
  urlSafe: false,
};

export default function isBase64(
  str: string,
  options: IsBase64Options = defaultIsBase64Options,
): boolean {
  merge(options, defaultIsBase64Options);
  const len: number = str.length;

  if (options.urlSafe) {
    return urlSafeBase64.test(str);
  }

  if (!len || len % 4 !== 0 || notBase64.test(str)) {
    return false;
  }

  const firstPaddingChar = str.indexOf("=");
  return firstPaddingChar === -1 ||
    firstPaddingChar === len - 1 ||
    (firstPaddingChar === len - 2 && str[len - 1] === "=");
}
