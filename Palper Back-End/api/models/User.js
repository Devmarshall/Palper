/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

const _ = require('lodash');
// eslint-disable-next-line import/no-unresolved
const bcrypt = require('bcryptjs');

module.exports = {
  attributes: {
    email: {
      type: 'string',
      isEmail: true,
      required: true,
      unique: true,
    },
    username: {
      type: 'string',
      required: true,
      unique: true,
    },
    password: {
      type: 'string',
      required: true,
    },
  },
  customToJSON: () => _.omit(this, ['password']),

  beforeCreate: (user, cb) => {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(user.password, salt, null, (_err, hash) => {
        if (_err) return cb(err);
        // eslint-disable-next-line no-param-reassign
        user.password = hash;
        return cb();
      });
    });
  },
};
