import {test} from "./test-template.ts";

test({
    validator: "isISO31661Alpha2",
    valid: [
        "FR",
        "fR",
        "GB",
        "PT",
        "CM",
        "JP",
        "PM",
        "ZW",
        "MM",
        "cc",
        "GG",
    ],
    invalid: [
        "",
        "FRA",
        "AA",
        "PI",
        "RP",
        "WV",
        "WL",
        "UK",
        "ZZ",
    ],
});
