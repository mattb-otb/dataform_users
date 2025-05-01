// Workspace wide variables

//* GCP project stuff. *//
const PROJECT_NAME = 'on-the-beach---attribution';
const GA_DATAFORM = 'dataform_ga4';
const GA_MI_GOLD = 'ga_mi_dataform_gold';

//* Dataform datasets/schema. *//
const DATAFORM_LV1 = 'dataform_users_bronze';
const DATAFORM_LV2 = 'dataform_users_silver';
const DATAFORM_LV3 = 'dataform_users_gold';

//* Project variables. *//
const ATT_SETTINGS = (data) => {
  const ENGAGED_SESSION_MODEL = `(deal_search_events >= 1 OR pageviews >= 2 OR login_events > 0 OR create_account_events > 0 OR order_count > 0)`;
  const RETURN_HOME_DAY_DELAY = 1;
  const DORMANT_USER_TIME = 90;
};

//* Exported modules are below. *//
module.exports = {
PROJECT_NAME, GA_DATAFORM, GA_MI_GOLD, //* GCP project. *//
DATAFORM_LV1, DATAFORM_LV2, DATAFORM_LV3, //* Dataform levels/datasets/schema. *//
ATT_SETTINGS //* Attribution settings. *//
}