// Workspace wide variables

//* GCP project stuff. *//
const PROJECT_NAME = 'on-the-beach---attribution';
const GA_DATAFORM = 'dataform_ga4';
const GA_MI_GOLD = 'ga_mi_dataform_gold';

//* Dataform datasets/schema. *//
const DATAFORM_LV1 = 'dataform_users_bronze';
const DATAFORM_LV2 = 'dataform_users_silver';
const DATAFORM_LV3 = 'dataform_users_gold';

//* Exported modules are below. *//
module.exports = {
    PROJECT_NAME, GA_DATAFORM, GA_MI_GOLD, //* GCP project. *//
    DATAFORM_LV1, DATAFORM_LV2, DATAFORM_LV3 //* Dataform levels/datasets/schema. *//
}
