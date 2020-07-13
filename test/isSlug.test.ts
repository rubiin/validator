import {test} from "./test-template.ts";

test({
    validator: "isSlug",
    args: ["cs_67CZ"],
    valid: ["cs-cz", "cscz"],
    invalid: [
        "not-----------slug",
        "@#_$@",
        "-not-slug",
        "not-slug-",
        "_not-slug",
        "not-slug_",
    ],
});
