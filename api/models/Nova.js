/**
 * Nova.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    companyname:{
      type: 'string',
      maxLength: 200,
      required: true,
      example: 'loblaw'
    },
    stock:{
      type: 'number',
      required: true,
      example: '250'
    },
  },
};
