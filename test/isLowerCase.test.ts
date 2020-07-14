import {test} from "./test-template.ts";

test({
    validator: "isLowerCase",
    valid: [
        "abc",
        "abc123",
        "this is lowercase.",
        "tr竪s 端ber",
    ],
    invalid: [
        "fooBar",
        "123A",
    ],
});
