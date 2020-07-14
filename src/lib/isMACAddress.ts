import {IsMACAddressOptions} from "../interface/isMACAddressOptions.ts";

const macAddress: RegExp =
  /^([0-9a-fA-F][0-9a-fA-F]:){5}([0-9a-fA-F][0-9a-fA-F])$/;
const macAddressNoColons: RegExp = /^([0-9a-fA-F]){12}$/;
const macAddressWithHyphen: RegExp =
  /^([0-9a-fA-F][0-9a-fA-F]-){5}([0-9a-fA-F][0-9a-fA-F])$/;
const macAddressWithSpaces: RegExp =
  /^([0-9a-fA-F][0-9a-fA-F]\s){5}([0-9a-fA-F][0-9a-fA-F])$/;
const macAddressWithDots: RegExp =
  /^([0-9a-fA-F]{4}).([0-9a-fA-F]{4}).([0-9a-fA-F]{4})$/;

export default function isMACAddress(
  str: string,
  options: IsMACAddressOptions,
): boolean {
  if (options && options.no_colons) {
    return macAddressNoColons.test(str);
  }

  return macAddress.test(str) ||
    macAddressWithHyphen.test(str) ||
    macAddressWithSpaces.test(str) ||
    macAddressWithDots.test(str);
}
