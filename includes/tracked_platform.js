// function for classifying old school media types, like paid, owned and earned.

function tracked_platform(source, medium, channel) { 
  return `
 CASE 
        WHEN LOWER(source) LIKE('%travelsupermarket%') THEN 'TravelSupermarket'
        WHEN LOWER(source) LIKE('%icelolly%') THEN 'Icelolly'
        WHEN LOWER(source) LIKE('%skyscanner%') THEN 'Skyscanner'
        WHEN LOWER(source) LIKE('%dealchecker%') THEN 'Dealchecker'
        WHEN LOWER(source) LIKE('%travelzoo%') THEN 'TravelZoo'
        WHEN LOWER(source) LIKE('%adup%') AND REGEXP_CONTAINS(medium, '(?i)display|banner|expandable|interstitial|cpm') THEN 'Adup'
        WHEN LOWER(source) LIKE('%holidayextras%') THEN 'HolidayExtras'
        WHEN LOWER(source) LIKE('%rtbhouse%') THEN 'RTB House'
        WHEN LOWER(source) LIKE('%criteo%') THEN 'Criteo'
        WHEN LOWER(source) LIKE('%clicktripz%') THEN 'Clicktripz'
        WHEN LOWER(source) LIKE('td') OR LOWER(source) LIKE ('%tradedoubler%') THEN 'Tradedoubler'
        WHEN LOWER(source) LIKE('%awin%') THEN 'AWIN'
        WHEN LOWER(source) LIKE('%partnerize%') THEN 'Partnerize'
        WHEN LOWER(source) LIKE('%youtube%') THEN 'YouTube'
        WHEN LOWER(source) LIKE('%adup%') THEN 'Adup'
        WHEN LOWER(channel) LIKE ('brand - video') AND LOWER(source) LIKE('%google%') THEN 'YouTube'
        WHEN LOWER(source) LIKE('%tiktok%') THEN 'TikTok'
        WHEN LOWER(source) LIKE('%facebook%') AND LOWER(medium) IN ('paidsocial','paidsocial}','paid-social','social-paid','socialpaid') THEN 'Facebook Ads'
        WHEN LOWER(source) LIKE('%google%') AND LOWER(medium) IN('cpc','ppc','paidsearch') THEN 'Google Ads'
        WHEN LOWER(source) IN('bing','msn','microsoft') AND LOWER(medium) IN('cpc','ppc','paidsearch') THEN 'Bing Ads'
        WHEN LOWER(source) LIKE('%google%') AND channel LIKE('%performance max%') THEN 'Google Ads'
        WHEN LOWER(source) LIKE('%bing%') AND channel LIKE('%performance max%') THEN 'Bing Ads'
    ELSE 'Unknown' END
`;
};

module.exports = {
    tracked_platform
}