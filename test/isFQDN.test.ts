import {test} from "./test-template.ts";

test({
    validator: "isFQDN",
    valid: [
        "domain.com",
        "dom.plato",
        "a.domain.co",
        "foo--bar.com",
        "xn--froschgrn-x9a.com",
        "rebecca.blackfriday",
    ],
    invalid: [
        "abc",
        "256.0.0.0",
        "_.com",
        "*.some.com",
        "s!ome.com",
        "domain.com/",
        "/more.com",
        "domain.com�",
        "domain.com©",
    ],
});

test({
    validator: "isFQDN",
    args: [{
        allow_trailing_dot: true,
    }],
    valid: [
        "example.com.",
    ],
});
