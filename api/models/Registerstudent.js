/**
 * Registerstudent.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    childName:{
      type: 'string',
      required: true,
    },
    childEmail:{
      type: 'string',
      required: true,
    },
    childAge:{
      type: 'number',
      required: true,
    },
    childGrade:{
      type: 'number',
      required: true,
    },
    childDOB:{
      type: 'string',
      required: true,
    },
    childGender:{
      type: 'string',
      required: true,
    },
    childSchool:{
      type: 'string',
      required: true,
    },
    childAddress:{
      type: 'string',
      required: true,
    },
    childParentName:{
      type: 'string',
      required: true,
    },
    childMedicalCond:{
      type: 'string',
      required: true,
    },
    childEmergencyContactName:{
      type: 'string',
      required: true,
    },
    childEmergencyContactPhone:{
      type: 'number',
      required: true,
    },
    childRelationship:{
      type: 'string',
      required: true,
    },
    childBloodGroup:{
      type: 'string',
      required: true,
    },
    findAboutUs:{
      type: 'string',
      required: true,
    },
  },
};
