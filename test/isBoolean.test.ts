import {test} from "./test-template.ts";


test({
    validator: "isBoolean",
    valid: [
        "true",
        "false",
        "0",
        "1",
    ],
    invalid: [
        "1.0",
        "0.0",
        "true ",
        "False",
        "True",
        "yes",
    ],
});
