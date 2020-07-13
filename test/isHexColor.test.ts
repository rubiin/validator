import {test} from "./test-template.ts";

test({
    validator: "isHexColor",
    valid: [
        "#ff0000ff",
        "#ff0034",
        "#CCCCCC",
        "0f38",
        "fff",
        "#f00",
    ],
    invalid: [
        "#ff",
        "fff0a",
        "#ff12FG",
    ],
});
