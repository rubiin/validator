import {test} from "./test-template.ts";

test({
    validator: "matches",
    args: [/abc/],
    valid: ["abc", "abcdef", "123abc"],
    invalid: ["acb", "Abc"],
});

test({
    validator: "matches",
    args: ["abc"],
    valid: ["abc", "abcdef", "123abc"],
    invalid: ["acb", "Abc"],
});

test({
    validator: "matches",
    args: ["abc", "i"],
    valid: ["abc", "abcdef", "123abc", "AbC"],
    invalid: ["acb"],
});
