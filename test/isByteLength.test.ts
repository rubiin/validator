import {test} from "./test-template.ts";

test({
    validator: "isByteLength",
    args: [{ min: 2 }],
    valid: ["abc", "de", "abcd", "ｇｍａｉｌ"],
    invalid: ["", "a"],
});

test({
    validator: "isByteLength",
    args: [{ min: 2, max: 3 }],
    valid: ["abc", "de", "ｇ"],
    invalid: ["", "a", "abcd", "ｇｍ"],
});

test({
    validator: "isByteLength",
    args: [{ min: 0, max: 0 }],
    valid: [""],
    invalid: ["ｇ", "a"],
});
