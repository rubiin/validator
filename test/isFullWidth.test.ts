import {test} from "./test-template.ts";

test({
    validator: "isFullWidth",
    valid: [
        "ひらがな・カタカナ、．漢字",
        "３ー０　ａ＠ｃｏｍ",
        "Ｆｶﾀｶﾅﾞﾬ",
        "Good＝Parts",
    ],
    invalid: [
        "abc",
        "abc123",
        '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
    ],
});
