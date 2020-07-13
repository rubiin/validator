import {test} from "./test-template.ts";

test({
    validator: "isPort",
    valid: [
        "0",
        "22",
        "80",
        "443",
        "3000",
        "8080",
        "65535",
    ],
    invalid: [
        "",
        "-1",
        "65536",
    ],
});
