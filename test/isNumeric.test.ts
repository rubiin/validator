import {test} from "./test-template.ts";

test({
    validator: "isNumeric",
    valid: [
        "123",
        "00123",
        "-00123",
        "0",
        "-0",
        "+123",
        "123.123",
        "+000000",
    ],
    invalid: [
        " ",
        "",
        ".",
    ],
});

test({
    validator: "isNumeric",
    args: [{
        no_symbols: true,
    }],
    valid: [
        "123",
        "00123",
        "0",
    ],
    invalid: [
        "-0",
        "+000000",
        "",
        "+123",
        "123.123",
        "-00123",
        " ",
        ".",
    ],
});
