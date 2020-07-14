import {test} from "./test-template.ts";

test({
    validator: "isEmpty",
    valid: [
        "",
    ],
    invalid: [
        " ",
        "foo",
        "3",
    ],
});

test({
    validator: "isEmpty",
    args: [{ ignore_whitespace: false }],
    valid: [
        "",
    ],
    invalid: [
        " ",
        "foo",
        "3",
    ],
});

test({
    validator: "isEmpty",
    args: [{ ignore_whitespace: true }],
    valid: [
        "",
        " ",
    ],
    invalid: [
        "foo",
        "3",
    ],
});
