import {test} from "./test-template.ts";

test({
    validator: "isBIC",
    valid: [
        "SBICKEN1345",
        "SBICKEN1",
        "SBICKENY",
        "SBICKEN1YYP",
    ],
    invalid: [
        "SBIC23NXXX",
        "S23CKENXXXX",
        "SBICKENXX",
        "SBICKENXX9",
        "SBICKEN13458",
        "SBICKEN",
    ],
});
