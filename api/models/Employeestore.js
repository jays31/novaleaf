/**
 * Employeestore.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    empName:{
      type: 'string',
      required: true,
    },
    empJoinDate:{
      type: 'string',
      required: true,
    },
    empPhone:{
      type: 'number',
      required: true,
    },
    empAddress:{
      type: 'string',
      required: true,
    },
    empType:{
      type: 'string',
      required: true,
    },
    empHourRate:{
      type: 'number',
      required: true,
    },
    empRole:{
      type: 'string',
      required: true,
    },
  },
};