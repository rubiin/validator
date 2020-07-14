export interface IsURLOptions {
    protocols?: string[];
    require_tld?: boolean;
    require_protocol?: boolean;
    require_host?: boolean;
    require_valid_protocol?: boolean;
    allow_underscores?: boolean;
    allow_trailing_dot?: boolean;
    allow_protocol_relative_urls?: boolean;
    host_whitelist?: string[];
    host_blacklist?: string[];
    disallow_auth?: boolean;
}
