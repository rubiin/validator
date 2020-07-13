import {test} from "./test-template.ts";

test({
    validator: "isAscii",
    valid: [
        "foobar",
        "0987654321",
        "test@example.com",
        "1234abcDEF",
    ],
    invalid: [
        "ｆｏｏbar",
        "ｘｙｚ０９８",
        "１２３456",
        "ｶﾀｶﾅ",
    ],
});
