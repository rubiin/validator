import {test} from "./test-template.ts";

test({
    validator: "isAlpha",
    valid: [
        "abc",
        "ABC",
        "FoObar",
    ],
    invalid: [
        "abc1",
        "  foo  ",
        "",
        "ÄBC",
        "FÜübar",
        "Jön",
        "Heiß",
    ],
});

test({
    validator: "isAlpha",
    args: ["bg-BG"],
    valid: [
        "абв",
        "АБВ",
        "жаба",
        "яГоДа",
    ],
    invalid: [
        "abc1",
        "  foo  ",
        "",
        "ЁЧПС",
        "_аз_обичам_обувки_",
        "ехо!",
    ],
});

test({
    validator: "isAlpha",
    args: ["cs-CZ"],
    valid: [
        "žluťoučký",
        "KŮŇ",
        "Pěl",
        "Ďábelské",
        "ódy",
    ],
    invalid: [
        "ábc1",
        "  fůj  ",
        "",
    ],
});

test({
    validator: "isAlpha",
    args: ["sk-SK"],
    valid: [
        "môj",
        "ľúbím",
        "mäkčeň",
        "stĹp",
        "vŕba",
        "ňorimberk",
        "ťava",
        "žanéta",
        "Ďábelské",
        "ódy",
    ],
    invalid: [
        "1moj",
        "你好世界",
        "  Привет мир  ",
        "مرحبا العا ",
    ],
});

test({
    validator: "isAlpha",
    args: ["da-DK"],
    valid: [
        "aøå",
        "Ære",
        "Øre",
        "Åre",
    ],
    invalid: [
        "äbc123",
        "ÄBC11",
        "",
    ],
});

test({
    validator: "isAlpha",
    args: ["nl-NL"],
    valid: [
        "Kán",
        "één",
        "vóór",
        "nú",
        "héél",
    ],
    invalid: [
        "äca ",
        "abcß",
        "Øre",
    ],
});

test({
    validator: "isAlpha",
    args: ["de-DE"],
    valid: [
        "äbc",
        "ÄBC",
        "FöÖbär",
        "Heiß",
    ],
    invalid: [
        "äbc1",
        "  föö  ",
        "",
    ],
});

test({
    validator: "isAlpha",
    args: ["hu-HU"],
    valid: [
        "árvíztűrőtükörfúrógép",
        "ÁRVÍZTŰRŐTÜKÖRFÚRÓGÉP",
    ],
    invalid: [
        "äbc1",
        "  fäö  ",
        "Heiß",
        "",
    ],
});

test({
    validator: "isAlpha",
    args: ["pt-PT"],
    valid: [
        "palíndromo",
        "órgão",
        "qwértyúão",
        "àäãcëüïÄÏÜ",
    ],
    invalid: [
        "12abc",
        "Heiß",
        "Øre",
        "æøå",
        "",
    ],
});

test({
    validator: "isAlpha",
    args: ["it-IT"],
    valid: [
        "àéèìîóòù",
        "correnti",
        "DEFINIZIONE",
        "compilazione",
        "metró",
        "pèsca",
        "PÉSCA",
        "genî",
    ],
    invalid: [
        "äbc123",
        "ÄBC11",
        "æøå",
        "",
    ],
});

test({
    validator: "isAlpha",
    args: ["ar"],
    valid: [
        "أبت",
        "اَبِتَثّجً",
    ],
    invalid: [
        "١٢٣أبت",
        "١٢٣",
        "abc1",
        "  foo  ",
        "",
        "ÄBC",
        "FÜübar",
        "Jön",
        "Heiß",
    ],
});

test({
    validator: "isAlpha",
    args: ["fa-IR"],
    valid: [
        "پدر",
        "مادر",
        "برادر",
        "خواهر",
    ],
    invalid: [
        "فارسی۱۲۳",
        "۱۶۴",
        "abc1",
        "  foo  ",
        "",
        "ÄBC",
        "FÜübar",
        "Jön",
        "Heiß",
    ],
});

test({
    validator: "isAlpha",
    args: ["ku-IQ"],
    valid: [
        "ئؤڤگێ",
        "کوردستان",
    ],
    invalid: [
        "ئؤڤگێ١٢٣",
        "١٢٣",
        "abc1",
        "  foo  ",
        "",
        "ÄBC",
        "FÜübar",
        "Jön",
        "Heiß",
    ],
});

test({
    validator: "isAlpha",
    args: ["nb-NO"],
    valid: [
        "aøå",
        "Ære",
        "Øre",
        "Åre",
    ],
    invalid: [
        "äbc123",
        "ÄBC11",
        "",
    ],
});

test({
    validator: "isAlpha",
    args: ["pl-PL"],
    valid: [
        "kreską",
        "zamknięte",
        "zwykłe",
        "kropką",
        "przyjęły",
        "święty",
        "Pozwól",
    ],
    invalid: [
        "12řiď ",
        "blé!!",
        "föö!2!",
    ],
});

test({
    validator: "isAlpha",
    args: ["sr-RS"],
    valid: [
        "ШћжЂљЕ",
        "ЧПСТЋЏ",
    ],
    invalid: [
        "řiď ",
        "blé33!!",
        "föö!!",
    ],
});

test({
    validator: "isAlpha",
    args: ["sr-RS@latin"],
    valid: [
        "ŠAabčšđćž",
        "ŠATROĆčđš",
    ],
    invalid: [
        "12řiď ",
        "blé!!",
        "föö!2!",
    ],
});

test({
    validator: "isAlpha",
    args: ["es-ES"],
    valid: [
        "ábcó",
        "ÁBCÓ",
        "dormís",
        "volvés",
        "español",
    ],
    invalid: [
        "äca ",
        "abcß",
        "föö!!",
    ],
});

test({
    validator: "isAlpha",
    args: ["sv-SE"],
    valid: [
        "religiös",
        "stjäla",
        "västgöte",
        "Åre",
    ],
    invalid: [
        "AİıÖöÇçŞşĞğÜüZ",
        "religiös23",
        "",
    ],
});

test({
    validator: "isAlpha",
    args: ["ar-SY"],
    valid: [
        "أبت",
        "اَبِتَثّجً",
    ],
    invalid: [
        "١٢٣أبت",
        "١٢٣",
        "abc1",
        "  foo  ",
        "",
        "ÄBC",
        "FÜübar",
        "Jön",
        "Heiß",
    ],
});

test({
    validator: "isAlpha",
    args: ["tr-TR"],
    valid: [
        "AİıÖöÇçŞşĞğÜüZ",
    ],
    invalid: [
        "0AİıÖöÇçŞşĞğÜüZ1",
        "  AİıÖöÇçŞşĞğÜüZ  ",
        "abc1",
        "  foo  ",
        "",
        "ÄBC",
        "Heiß",
    ],
});

test({
    validator: "isAlpha",
    args: ["uk-UA"],
    valid: [
        "АБВГҐДЕЄЖЗИIЇЙКЛМНОПРСТУФХЦШЩЬЮЯ",
    ],
    invalid: [
        "0AİıÖöÇçŞşĞğÜüZ1",
        "  AİıÖöÇçŞşĞğÜüZ  ",
        "abc1",
        "  foo  ",
        "",
        "ÄBC",
        "Heiß",
        "ЫыЪъЭэ",
    ],
});

test({
    validator: "isAlpha",
    args: ["el-GR"],
    valid: [
        "αβγδεζηθικλμνξοπρςστυφχψω",
        "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
        "άέήίΰϊϋόύώ",
        "ΆΈΉΊΪΫΎΏ",
    ],
    invalid: [
        "0AİıÖöÇçŞşĞğÜüZ1",
        "  AİıÖöÇçŞşĞğÜüZ  ",
        "ÄBC",
        "Heiß",
        "ЫыЪъЭэ",
        "120",
        "jαckγ",
    ],
});

test({
    validator: "isAlpha",
    args: ["he"],
    valid: [
        "בדיקה",
        "שלום",
    ],
    invalid: [
        "בדיקה123",
        "  foo  ",
        "abc1",
        "",
    ],
});

test({
    validator: "isAlpha",
    args: ["is-NOT"],
    error: [
        "abc",
        "ABC",
    ],
});
