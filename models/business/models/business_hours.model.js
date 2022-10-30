/**
 * @typedef {Object} DbBusinessHours
 * @property {number} business_id
 * @property {number} day_of_week
 * @property {(Date | null)} open
 * @property {(Date | null)} close
 */

/**
 * @typedef {Object} DbBusinessHoursOverride
 * @property {number} business_id
 * @property {Date} start_range
 * @property {(Date | null)} end_range
 * @property {number} day_of_week
 * @property {(Date | null)} open
 * @property {(Date | null)} close
 */

/**
 * @typedef {Object} DbBusinessWaitTime
 * @property {number} business_id
 * @property {number} day_of_week
 * @property {Date} wait_time
 * @property {Date} set_at
 */