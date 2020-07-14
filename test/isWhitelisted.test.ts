import {test} from "./test-template.ts";

test({
    validator: "isWhitelisted",
    args: ["abcdefghijklmnopqrstuvwxyz-"],
    valid: ["foo", "foobar", "baz-foo"],
    invalid: ["foo bar", "fo.bar", "türkçe"],
});
