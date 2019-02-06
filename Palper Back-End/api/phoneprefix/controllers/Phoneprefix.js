'use strict';

/**
 * Phoneprefix.js controller
 *
 * @description: A set of functions called "actions" for managing `Phoneprefix`.
 */

module.exports = {

  /**
   * Retrieve phoneprefix records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.phoneprefix.search(ctx.query);
    } else {
      return strapi.services.phoneprefix.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a phoneprefix record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.phoneprefix.fetch(ctx.params);
  },

  /**
   * Count phoneprefix records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.phoneprefix.count(ctx.query);
  },

  /**
   * Create a/an phoneprefix record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.phoneprefix.add(ctx.request.body);
  },

  /**
   * Update a/an phoneprefix record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.phoneprefix.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an phoneprefix record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.phoneprefix.remove(ctx.params);
  }
};
