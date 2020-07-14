import {test} from "./test-template.ts";


test({
    validator: "isAfter",
    args: ["2011-08-03"],
    valid: ["2011-08-04", `${new Date(2011, 8, 10)}`],
    invalid: ["2010-07-02", "2011-08-03", `${new Date(0)}`, "foo"],
});

test({
    validator: "isAfter",
    valid: ["2100-08-04", `${new Date(Date.now() + 86400000)}`],
    invalid: ["2010-07-02", `${new Date(0)}`],
});

test({
    validator: "isAfter",
    args: ["2011-08-03"],
    valid: ["2015-09-17"],
    invalid: ["invalid date"],
});

test({
    validator: "isAfter",
    args: ["invalid date"],
    invalid: ["invalid date", "2015-09-17"],
});
