export interface IsEmailOptions {
    allow_display_name?: boolean;
    require_display_name?: boolean;
    allow_utf8_local_part?: boolean;
    require_tld?: boolean;
    allow_ip_domain?: boolean;
    domain_specific_validation?: boolean;
    ignore_max_length?: boolean;
}
