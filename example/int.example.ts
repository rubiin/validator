import {validator} from "../mod.ts";
import * as log from "https://deno.land/std/log/mod.ts";
import {IsIntOptions} from "../src/interface/mod.ts";

interface IterationDataInterface {
    value: string;
    options: IsIntOptions
}

const iterationData: IterationDataInterface[] = [];

iterationData.push({
        value: '0001234',
        options: {
            max: 9999,
            min: 0,
            // gt?: number;
            // lt?: number;
            allow_leading_zeroes: true
        }
    },
    {
        value: '0001234',
        options: {
            max: 9999,
            min: 0,
            gt: 100,
            lt: 2000,
            allow_leading_zeroes: true
        }
    },
    {
        // ERROR value
        value: '1234',
        options: {
            max: 100,
        }
    }
);

for (let iterationIndex = 0; iterationData.length > iterationIndex; iterationIndex++) {
    const value = iterationData[iterationIndex].value;
    const options = iterationData[iterationIndex].options;

    const isInt = validator.isInt(value, options);

    log.info(`Is ${value} a int value: ${isInt}`);

}

