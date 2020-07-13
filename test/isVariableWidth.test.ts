import {test} from "./test-template.ts";

test({
    validator: "isVariableWidth",
    valid: [
        "ひらがなカタカナ漢字ABCDE",
        "３ー０123",
        "Ｆｶﾀｶﾅﾞﾬ",
        "Good＝Parts",
    ],
    invalid: [
        "abc",
        "abc123",
        '!"#$%&()<>/+=-_? ~^|.,@`{}[]',
        "ひらがな・カタカナ、．漢字",
        "１２３４５６",
        "ｶﾀｶﾅﾞﾬ",
    ],
});
