import merge from "./util/merge.ts";

interface ContainsOptions {
  ignore_case: boolean;
}

const defaultContainsOptions: ContainsOptions = {
  ignore_case: false,
};

export default function contains(
  str: string,
  elem: string,
  options: ContainsOptions = defaultContainsOptions,
) {
  merge(options, defaultContainsOptions);
  return options.ignore_case
    ? str.toLowerCase().indexOf(elem.toLowerCase()) >= 0
    : str.indexOf(elem) >= 0;
}
