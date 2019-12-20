/**
 * Registerstudent.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    program:      { type: 'string', required: true, },
    programStart: { type: 'string', required: true, },
    programEnd:   { type: 'string', required: true, },
    childName:    { type: 'string', required: true, },
    childAge:     { type: 'string', required: true, },
    childGrade:   { type: 'string', required: true, },
    childDOB:     { type: 'string', required: true, },
    childGender:  { type: 'string', required: true, },
    school:       { type: 'string', required: true, },
    homeAddress:  { type: 'string', required: true, },
    parentName:  { type: 'string', required: true, },
    phone:        { type: 'string', required: true, },
    email:        { type: 'string', required: true, },
    medicalCond:  { type: 'string', required: true, },
    emergName:    { type: 'string', required: true, },
    emergPhone:   { type: 'string', required: true, },
    initials:     { type: 'string', required: true, },
    relationship: { type: 'string', required: true, },
    date:         { type: 'string', required: true, },
    socialMedia:  { type: 'string', required: true, },
    iPad:         { type: 'string', required: true, },
    fullName:     { type: 'string', required: true, },
    initials2:    { type: 'string', required: true, },
    date2:        { type: 'string', required: true, },
  },
};
