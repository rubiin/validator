import {test} from "./test-template.ts";

test({
    validator: "isSurrogatePair",
    valid: [
        "𠮷野𠮷",
        "𩸽",
        "ABC千𥧄1-2-3",
    ],
    invalid: [
        "吉野竈",
        "鮪",
        "ABC1-2-3",
    ],
});
