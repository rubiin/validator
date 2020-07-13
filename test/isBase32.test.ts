import {test} from "./test-template.ts";

test({
    validator: "isBase32",
    valid: [
        "ZG======",
        "JBSQ====",
        "JBSWY===",
        "JBSWY3A=",
        "JBSWY3DP",
        "JBSWY3DPEA======",
        "K5SWYY3PNVSSA5DPEBXG6ZA=",
        "K5SWYY3PNVSSA5DPEBXG6===",
    ],
    invalid: [
        "12345",
        "",
        "JBSWY3DPtesting123",
        "ZG=====",
        "Z======",
        "Zm=8JBSWY3DP",
        "=m9vYg==",
        "Zm9vYm/y====",
    ],
});
