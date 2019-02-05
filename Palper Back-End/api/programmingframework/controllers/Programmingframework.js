'use strict';

/**
 * Programmingframework.js controller
 *
 * @description: A set of functions called "actions" for managing `Programmingframework`.
 */

module.exports = {

  /**
   * Retrieve programmingframework records.
   *
   * @return {Object|Array}
   */

  find: async (ctx) => {
    if (ctx.query._q) {
      return strapi.services.programmingframework.search(ctx.query);
    } else {
      return strapi.services.programmingframework.fetchAll(ctx.query);
    }
  },

  /**
   * Retrieve a programmingframework record.
   *
   * @return {Object}
   */

  findOne: async (ctx) => {
    if (!ctx.params._id.match(/^[0-9a-fA-F]{24}$/)) {
      return ctx.notFound();
    }

    return strapi.services.programmingframework.fetch(ctx.params);
  },

  /**
   * Count programmingframework records.
   *
   * @return {Number}
   */

  count: async (ctx) => {
    return strapi.services.programmingframework.count(ctx.query);
  },

  /**
   * Create a/an programmingframework record.
   *
   * @return {Object}
   */

  create: async (ctx) => {
    return strapi.services.programmingframework.add(ctx.request.body);
  },

  /**
   * Update a/an programmingframework record.
   *
   * @return {Object}
   */

  update: async (ctx, next) => {
    return strapi.services.programmingframework.edit(ctx.params, ctx.request.body) ;
  },

  /**
   * Destroy a/an programmingframework record.
   *
   * @return {Object}
   */

  destroy: async (ctx, next) => {
    return strapi.services.programmingframework.remove(ctx.params);
  }
};
