/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your actions.
 *
 * For more information on configuring policies, check out:
 * https://sailsjs.com/docs/concepts/policies
 */

module.exports.policies = {

  /** *************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions, unless ovs@0.3.1
├─ jsonwebtoken@8.4.0
├─ jwa@1.1.6
├─ jws@3.1.5
├─ lodash.includes@4.3.0
├─ lodash.isboolean@3.0.3
├─ lodash.isinteger@4.0.4
├─ lodash.isnumber@3.0.3
├─ lodash.isplainobject@4.0.6
├─ lodash.once@4.1.1
erridden.       *
  * (`true` allows public access)                                            *
  *                                                                          *
  ************************************************************************** */

  '*': true,

};
