/**
 * Timetable.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    Time:{
      type: 'string',
      required: true,
    },
    Monday:{
      type: 'string',
      required: true,
    },
    Tuesday:{
      type: 'string',
      required: true,
    },
    Wednesday:{
      type: 'string',
      required: true,
    },
    Thursday:{
      type: 'string',
      required: true,
    },
    Friday:{
      type: 'string',
      required: true,
    },
    Saturday:{
      type: 'string',
      required: true,
    },
    Sunday:{
      type: 'string',
      required: true,
    },
  },
};

