import {test} from "./test-template.ts";

test({
    validator: "equals",
    args: ["abc"],
    valid: ["abc"],
    invalid: ["Abc", "123"],
});

({
    validator: "equals",
    args: ["abc ", { trim: true }],
    valid: ["  abc  "],
    invalid: ["Abc", "123"],
});

test({
    validator: "equals",
    args: ["abc", { ignore_case: true }],
    valid: ["abc", "AbC"],
    invalid: ["@bc", "123"],
});
