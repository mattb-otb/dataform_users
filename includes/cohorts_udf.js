// javascript functions for campaign name analysis, mainly regex, mainly used in PPC. 

function get_cohort_name(cohort) {
    return `
CASE
    WHEN ${cohort} = -4 THEN '-4. Dormant Top Customer'
    WHEN ${cohort} = -3 THEN '-3. Dormant Repeat Customer'
    WHEN ${cohort} = -2 THEN '-2. Dormant New Customer'
    WHEN ${cohort} = -1 THEN '-1. Dormant Browser'
    WHEN ${cohort} = 1 THEN '1. Unengaged Browser'
    WHEN ${cohort} = 2 THEN '2. Engaged Browser'
    WHEN ${cohort} = 3 THEN '4. Unengaged New Customer'
    WHEN ${cohort} = 4 THEN '3. New Customer'
    WHEN ${cohort} = 5 THEN '5. Re-engaged New Customer'
    WHEN ${cohort} = 6 THEN '7. Unengaged Repeat Customer'
    WHEN ${cohort} = 7 THEN '6. Repeat Customer'
    WHEN ${cohort} = 8 THEN '8. Re-engaged Repeat Customer'
    WHEN ${cohort} = 9 THEN '9. Unengaged Top Customer'
    WHEN ${cohort} = 10 THEN '10. Top Customer'
ELSE '0. Unknown' END    
`;
};

module.exports = {
    get_cohort_name
}
