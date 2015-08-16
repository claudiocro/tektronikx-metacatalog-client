import DS from 'ember-data';
import Ember from 'ember';

const { computed } = Ember;

export default DS.Model.extend({

  // attributes
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  tagline: DS.attr('string'),
  email: DS.attr('string'),
  website: DS.attr('string'),
  admin: DS.attr('boolean'),
  userType: DS.attr('number'),

  isAdmin: computed('userType', function(){
    return this.get('userType') === 3;
  }),

  // computed
  fullName: computed('firstName', 'lastName', function () {
    return this.get('firstName') + ' ' + this.get('lastName');
  })
});
