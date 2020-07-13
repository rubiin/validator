import {test} from "./test-template.ts";


test({
    validator: "isUpperCase",
    valid: [
        "ABC",
        "ABC123",
        "ALL CAPS IS FUN.",
        "   .",
    ],
    invalid: [
        "fooBar",
        "123abc",
    ],
});
