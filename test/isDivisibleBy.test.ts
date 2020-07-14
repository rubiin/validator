import {test} from "./test-template.ts";

test({
    validator: "isDivisibleBy",
    args: ["0"],
    invalid: [
        "9",
        "10",
        "1.12",
        "0.87",
        "0.0",
    ],
});

test({
    validator: "isDivisibleBy",
    args: ["2"],
    valid: [
        "10.0",
        "0",
        "2.0",
    ],
    invalid: [
        "9",
        "17",
        "1.2",
        "1.1",
    ],
});

test({
    validator: "isDivisibleBy",
    args: ["11"],
    valid: [
        "11",
        "121",
        "0",
        "11.0",
    ],
    invalid: [
        "91",
        "17",
        "11.2",
    ],
});
