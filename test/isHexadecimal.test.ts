import {test} from "./test-template.ts";

test({
    validator: "isHexadecimal",
    valid: [
        "deadBEEF",
        "ff0044",
    ],
    invalid: [
        "abcdefg",
        "",
        "..",
        "0xa2h",
        "0xa20x",
        "0x0123456789abcDEFq",
        "0hfedCBA9876543210q",
        "01234q56789abcDEF",
    ],
});
