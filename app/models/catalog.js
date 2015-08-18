import DS from 'ember-data';
import Ember from 'ember';

const {computed,isNone} = Ember;

export default DS.Model.extend({
  modelpages: DS.hasMany('modelpage'),
  year: DS.attr('number'),
  name: DS.attr('string'),
  storageid: DS.attr('string'),

  displayName: computed('name', 'year', function() {
    if(isNone(this.get('name')) && isNone(this.get('year'))) {
      return undefined;
    }
    else {
      return this.get('name') + " - " + this.get('year');
    }
  })

});
