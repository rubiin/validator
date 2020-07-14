import {test} from "./test-template.ts";

test({
    validator: "isMultibyte",
    valid: [
        "ひらがな・カタカナ、．漢字",
        "あいうえお foobar",
        "test＠example.com",
        "1234abcDEｘｙｚ",
        "ｶﾀｶﾅ",
        "中文",
    ],
    invalid: [
        "abc",
        "abc123",
        '<>@" *.',
    ],
});
