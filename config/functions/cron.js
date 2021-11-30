'use strict';

/**
 * Cron config that gives you an opportunity
 * to run scheduled jobs.
 *
 * The cron format consists of:
 * [SECOND (optional)] [MINUTE] [HOUR] [DAY OF MONTH] [MONTH OF YEAR] [DAY OF WEEK]
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#cron-tasks
 */

module.exports = {
  /**
   * Simple example.
   * Everyday at 4am.
   */
  '0 4 * * *': () => {
    // Fetch data that have the `yourDateAttributeName_lt` lower than the now.
    const data = await strapi.query('prediction').find({
      identified: false, _limit: 100000
    });

    // Delete all entries fetched.
    data.forEach((entry) => strapi.query('prediction').delete({
      id: entry.id
    }));
  }
};
