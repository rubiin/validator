export interface IsCurrencyOptions {
    symbol: string;
    require_symbol: boolean;
    allow_space_after_symbol: boolean;
    symbol_after_digits: boolean;
    allow_negatives: boolean;
    parens_for_negatives: boolean;
    negative_sign_before_digits: boolean;
    negative_sign_after_digits: boolean;
    allow_negative_sign_placeholder: boolean;
    thousands_separator: string;
    decimal_separator: string;
    allow_decimal: boolean;
    require_decimal: boolean;
    digits_after_decimal: Array<number>;
    allow_space_after_digits: boolean;
}
