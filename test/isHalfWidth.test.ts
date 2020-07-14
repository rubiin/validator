import {test} from "./test-template.ts";

test({
    validator: "isHalfWidth",
    valid: [
        '"#$%&()<>/+=-_? ~^|.,@`{}[]',
        "l-btn_02--active",
        "abc123い",
        "ｶﾀｶﾅﾞﾬ￩",
    ],
    invalid: [
        "あいうえお",
        "００１１",
    ],
});
