import {test} from "./test-template.ts";

test({
    validator: "isOctal",
    valid: [
        "076543210",
        "0o01234567",
    ],
    invalid: [
        "abcdefg",
        "012345678",
        "012345670c",
        "00c12345670c",
        "",
        "..",
    ],
});
