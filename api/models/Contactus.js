/**
 * Contactus.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    fullName:{
      type: 'string',
      maxLength: 100,
      required: true,
    },
    emailID:{
      type: 'string',
      required: true,
    },
    phoneNo:{
      type: 'number',
      required: true,
    },
    message:{
      type: 'string',
      maxLength: 500,
    },
  },
};
