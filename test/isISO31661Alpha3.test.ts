// from https://en.wikipedia.org/wiki/ISO_3166-1_alpha-3
import {test} from "./test-template.ts";

test({
    validator: "isISO31661Alpha3",
    valid: [
        "ABW",
        "HND",
        "KHM",
        "RWA",
    ],
    invalid: [
        "",
        "FR",
        "fR",
        "GB",
        "PT",
        "CM",
        "JP",
        "PM",
        "ZW",
    ],
});
