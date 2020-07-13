import {test} from "./test-template.ts";

test({
    validator: "contains",
    args: ["foo"],
    valid: ["foo", "foobar", "bazfoo"],
    invalid: ["bar", "fobar", "Foobar"],
});

test({
    validator: "contains",
    args: ["foo", {
        ignore_case: true,
    }],
    valid: ["Foo", "FOObar", "BAZfoo"],
    invalid: ["bar", "fobar", "baxoof"],
});
