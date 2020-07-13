import {test} from "./test-template.ts";


test({
    validator: "isPassportNumber",
    args: ["AM"],
    valid: [
        "AF0549358",
    ],
    invalid: [
        "A1054935",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["AR"],
    valid: [
        "AAC811035",
    ],
    invalid: [
        "A11811035",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["AT"],
    valid: [
        "P 1630837",
        "P 4366918",
    ],
    invalid: [
        "0 1630837",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["AU"],
    valid: [
        "N0995852",
        "L4819236",
    ],
    invalid: [
        "1A012345",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["BE"],
    valid: [
        "EM000000",
        "LA080402",
    ],
    invalid: [
        "00123456",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["BG"],
    valid: [
        "346395366",
        "039903356",
    ],
    invalid: [
        "ABC123456",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["CA"],
    valid: [
        "GA302922",
        "ZE000509",
    ],
    invalid: [
        "AB0123456",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["CH"],
    valid: [
        "S1100409",
        "S5200073",
        "X4028791",
    ],
    invalid: [
        "AB123456",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["CN"],
    valid: [
        "G25352389",
        "E00160027",
    ],
    invalid: [
        "K0123456",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["CY"],
    valid: [
        "K00000413",
    ],
    invalid: [
        "K10100",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["CZ"],
    valid: [
        "99003853",
        "42747260",
    ],
    invalid: [
        "012345678",
        "AB123456",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["DE"],
    valid: [
        "C01X00T47",
        "C26VMVVC3",
    ],
    invalid: [
        "AS0123456",
        "A012345678",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["DK"],
    valid: [
        "900010172",
    ],
    invalid: [
        "01234567",
        "K01234567",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["DZ"],
    valid: [
        "855609385",
        "154472412",
        "197025599",
    ],
    invalid: [
        "AS0123456",
        "A012345678",
        "0123456789",
        "12345678",
        "98KK54321",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["EE"],
    valid: [
        "K4218285",
        "K3295867",
        "KB0167630",
        "VD0023777",
    ],
    invalid: [
        "K01234567",
        "KB00112233",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["ES"],
    valid: [
        "AF238143",
        "ZAB000254",
    ],
    invalid: [
        "AF01234567",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["FI"],
    valid: [
        "XP8271602",
        "XD8500003",
    ],
    invalid: [
        "A01234567",
        "ABC012345",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["FR"],
    valid: [
        "10CV28144",
        "60RF19342",
        "05RP34083",
    ],
    invalid: [
        "012345678",
        "AB0123456",
        "01C234567",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["GB"],
    valid: [
        "925076473",
        "107182890",
        "104121156",
    ],
    invalid: [
        "A012345678",
        "K000000000",
        "0123456789",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["GR"],
    valid: [
        "AE0000005",
        "AK0219304",
    ],
    invalid: [
        "A01234567",
        "012345678",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["HR"],
    valid: [
        "007007007",
        "138463188",
    ],
    invalid: [
        "A01234567",
        "00112233",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["HU"],
    valid: [
        "ZA084505",
        "BA0006902",
    ],
    invalid: [
        "A01234567",
        "012345678",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["IE"],
    valid: [
        "D23145890",
        "X65097105",
        "XN0019390",
    ],
    invalid: [
        "XND012345",
        "0123456789",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["IN"],
    valid: [
        "A-1234567",
        "A1234567",
        "X0019390",
    ],
    invalid: [
        "AB-1234567",
        "0123456789",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["IS"],
    valid: [
        "A2040611",
        "A1197783",
    ],
    invalid: [
        "K0000000",
        "01234567",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["IT"],
    valid: [
        "YA8335453",
        "KK0000000",
    ],
    invalid: [
        "01234567",
        "KAK001122",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["JP"],
    valid: [
        "NH1106002",
        "TE3180251",
        "XS1234567",
    ],
    invalid: [
        "X12345678",
        "012345678",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["KR"],
    valid: [
        "M35772699",
        "M70689098",
    ],
    invalid: [
        "X12345678",
        "012345678",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["LT"],
    valid: [
        "20200997",
        "LB311756",
    ],
    invalid: [
        "LB01234567",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["LU"],
    valid: [
        "JCU9J4T2",
        "JC4E7L2H",
    ],
    invalid: [
        "JCU9J4T",
        "JC4E7L2H0",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["LV"],
    valid: [
        "LV9000339",
        "LV4017173",
    ],
    invalid: [
        "LV01234567",
        "4017173LV",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["MT"],
    valid: [
        "1026564",
    ],
    invalid: [
        "01234567",
        "MT01234",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["NL"],
    valid: [
        "XTR110131",
        "XR1001R58",
    ],
    invalid: [
        "XTR11013R",
        "XR1001R58A",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["PO"],
    valid: [
        "ZS 0000177",
        "AN 3000011",
    ],
    invalid: [
        "A1 0000177",
        "012345678",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["PT"],
    valid: [
        "I700044",
        "K453286",
    ],
    invalid: [
        "0700044",
        "K4532861",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["RO"],
    valid: [
        "05485968",
        "040005646",
    ],
    invalid: [
        "R05485968",
        "0511060461",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["SE"],
    valid: [
        "59000001",
        "56702928",
    ],
    invalid: [
        "SE012345",
        "012345678",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["SL"],
    valid: [
        "PB0036440",
        "PB1390281",
    ],
    invalid: [
        "SL0123456",
        "P01234567",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["SK"],
    valid: [
        "P0000000",
    ],
    invalid: [
        "SK012345",
        "012345678",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["TR"],
    valid: [
        "U 06764100",
        "U 01048537",
    ],
    invalid: [
        "06764100U",
        "010485371",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["UA"],
    valid: [
        "EH345655",
        "EK000001",
        "AP841503",
    ],
    invalid: [
        "01234567",
        "012345EH",
        "A012345P",
    ],
});

test({
    validator: "isPassportNumber",
    args: ["US"],
    valid: [
        "790369937",
        "340007237",
    ],
    invalid: [
        "US0123456",
        "0123456US",
        "7903699371",
    ],
});
