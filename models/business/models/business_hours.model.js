/**
 * @typedef {object} DbBusinessHours
 * @property {number} business_id
 * @property {number} day_of_week
 * @property {(Date | null)} open
 * @property {(Date | null)} close
 */

/**
 * @typedef {object} DbBusinessHoursOverride
 * @property {number} business_id
 * @property {Date} start_range
 * @property {(Date | null)} end_range
 * @property {number} day_of_week
 * @property {(Date | null)} open
 * @property {(Date | null)} close
 */

/**
 * @typedef {object} DbBusinessWaitTime
 * @property {number} business_id
 * @property {number} day_of_week
 * @property {Date} wait_time
 * @property {Date} set_at
 */