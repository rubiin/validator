import {test} from "./test-template.ts";

test({
    validator: "isAlphanumeric",
    valid: [
        "abc123",
        "ABC11",
    ],
    invalid: [
        "abc ",
        "foo!!",
        "ÄBC",
        "FÜübar",
        "Jön",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["en-GB"],
    valid: [
        "abc123",
        "ABC11",
    ],
    invalid: [
        "abc ",
        "foo!!",
        "ÄBC",
        "FÜübar",
        "Jön",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["bg-BG"],
    valid: [
        "абв1",
        "4АБ5В6",
        "жаба",
        "яГоДа2",
        "йЮя",
        "123",
    ],
    invalid: [
        " ",
        "789  ",
        "hello000",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["cs-CZ"],
    valid: [
        "řiť123",
        "KŮŇ11",
    ],
    invalid: [
        "řiď ",
        "blé!!",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["sk-SK"],
    valid: [
        "1môj",
        "2ľúbím",
        "3mäkčeň",
        "4stĹp",
        "5vŕba",
        "6ňorimberk",
        "7ťava",
        "8žanéta",
        "9Ďábelské",
        "10ódy",
    ],
    invalid: [
        "1moj!",
        "你好世界",
        "  Привет мир  ",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["da-DK"],
    valid: [
        "ÆØÅ123",
        "Ære321",
        "321Øre",
        "123Åre",
    ],
    invalid: [
        "äbc123",
        "ÄBC11",
        "",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["nl-NL"],
    valid: [
        "Kán123",
        "één354",
        "v4óór",
        "nú234",
        "hé54él",
    ],
    invalid: [
        "1äca ",
        "ab3cß",
        "Øre",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["de-DE"],
    valid: [
        "äbc123",
        "ÄBC11",
    ],
    invalid: [
        "äca ",
        "föö!!",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["hu-HU"],
    valid: [
        "0árvíztűrőtükörfúrógép123",
        "0ÁRVÍZTŰRŐTÜKÖRFÚRÓGÉP123",
    ],
    invalid: [
        "1időúr!",
        "äbc1",
        "  fäö  ",
        "Heiß!",
        "",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["pt-PT"],
    valid: [
        "palíndromo",
        "2órgão",
        "qwértyúão9",
        "àäãcë4üïÄÏÜ",
    ],
    invalid: [
        "!abc",
        "Heiß",
        "Øre",
        "æøå",
        "",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["it-IT"],
    valid: [
        "123àéèìîóòù",
        "123correnti",
        "DEFINIZIONE321",
        "compil123azione",
        "met23ró",
        "pès56ca",
        "PÉS45CA",
        "gen45î",
    ],
    invalid: [
        "äbc123",
        "ÄBC11",
        "æøå",
        "",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["es-ES"],
    valid: [
        "ábcó123",
        "ÁBCÓ11",
    ],
    invalid: [
        "äca ",
        "abcß",
        "föö!!",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["ar"],
    valid: [
        "أبت123",
        "أبتَُِ١٢٣",
    ],
    invalid: [
        "äca ",
        "abcß",
        "föö!!",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["fa-IR"],
    valid: [
        "پارسی۱۲۳",
        "۱۴۵۶",
        "مژگان9",
    ],
    invalid: [
        "äca ",
        "abcßة",
        "föö!!",
        "٤٥٦",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["ku-IQ"],
    valid: [
        "ئؤڤگێ١٢٣",
    ],
    invalid: [
        "äca ",
        "abcß",
        "föö!!",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["ar-SY"],
    valid: [
        "أبت123",
        "أبتَُِ١٢٣",
    ],
    invalid: [
        "abc ",
        "foo!!",
        "ÄBC",
        "FÜübar",
        "Jön",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["nb-NO"],
    valid: [
        "ÆØÅ123",
        "Ære321",
        "321Øre",
        "123Åre",
    ],
    invalid: [
        "äbc123",
        "ÄBC11",
        "",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["pl-PL"],
    valid: [
        "kre123ską",
        "zam21knięte",
        "zw23ykłe",
        "123",
        "prz23yjęły",
        "świ23ęty",
        "Poz1322wól",
    ],
    invalid: [
        "12řiď ",
        "blé!!",
        "föö!2!",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["sr-RS"],
    valid: [
        "ШћжЂљЕ123",
        "ЧПСТ132ЋЏ",
    ],
    invalid: [
        "řiď ",
        "blé!!",
        "föö!!",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["sr-RS@latin"],
    valid: [
        "ŠAabčšđćž123",
        "ŠATRO11Ćčđš",
    ],
    invalid: [
        "řiď ",
        "blé!!",
        "föö!!",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["sv-SE"],
    valid: [
        "religiös13",
        "st23jäla",
        "västgöte123",
        "123Åre",
    ],
    invalid: [
        "AİıÖöÇçŞşĞğÜüZ",
        "foo!!",
        "",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["tr-TR"],
    valid: [
        "AİıÖöÇçŞşĞğÜüZ123",
    ],
    invalid: [
        "AİıÖöÇçŞşĞğÜüZ ",
        "foo!!",
        "ÄBC",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["uk-UA"],
    valid: [
        "АБВГҐДЕЄЖЗИIЇЙКЛМНОПРСТУФХЦШЩЬЮЯ123",
    ],
    invalid: [
        "éeoc ",
        "foo!!",
        "ÄBC",
        "ЫыЪъЭэ",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["el-GR"],
    valid: [
        "αβγδεζηθικλμνξοπρςστυφχψω",
        "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
        "20θ",
        "1234568960",
    ],
    invalid: [
        "0AİıÖöÇçŞşĞğÜüZ1",
        "  AİıÖöÇçŞşĞğÜüZ  ",
        "ÄBC",
        "Heiß",
        "ЫыЪъЭэ",
        "jαckγ",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["he"],
    valid: [
        "אבג123",
        "שלום11",
    ],
    invalid: [
        "אבג ",
        "לא!!",
        "abc",
        "  foo  ",
    ],
});

test({
    validator: "isAlphanumeric",
    args: ["is-NOT"],
    error: [
        "1234568960",
        "abc123",
    ],
});
