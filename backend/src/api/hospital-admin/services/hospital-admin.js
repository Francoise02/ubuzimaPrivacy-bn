'use strict';

/**
 * hospital-admin service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hospital-admin.hospital-admin');
