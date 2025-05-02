// GA and MI repo
declare({
    database: constants.PROJECT_NAME,
    schema: constants.GA_MI_GOLD,
    name: 'tbl_sessions',
    description: "Gold table for tbl_sessions."
});

declare({
    database: constants.PROJECT_NAME,
    schema: constants.GA_MI_GOLD,
    name: 'tbl_orders',
    description: "Gold table for tbl_orders."
});

// New events table data GA4 data 
declare({
    database: constants.PROJECT_NAME,
    schema:constants.GA_DATAFORM,
    name: 'src_ga4_events_combined',
    description: "Processed GA4 events data for OTB/Sunshine/IE."
});

// Bloomreach data
declare({
    database: 'genglandexponea',
    schema: 'eng_ab0f28f6_09fa_11ee_9b32_fe39de13d504_views',
    name: 'customers_external_ids',
    description: "BR data."
});

// Affiliate IDs
declare({
    database: constants.PROJECT_NAME,
    schema: 'gsheets',
    name: 'LIVE_affiliate_publisher_ids_otb',
    description: "Affiliate IDs and types."
});