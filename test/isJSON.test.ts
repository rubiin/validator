import {test} from "./test-template.ts";

test({
    validator: "isJSON",
    valid: [
        '{ "key": "value" }',
        "{}",
    ],
    invalid: [
        '{ key: "value" }',
        "{ 'key': 'value' }",
        "null",
        "1234",
        "false",
        '"nope"',
    ],
});
