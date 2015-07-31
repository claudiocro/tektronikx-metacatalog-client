import DS from 'ember-data';

export default DS.Model.extend({
  modelpages: DS.hasMany('modelpage'),
  year: DS.attr('number'),
  name: DS.attr('string'),
  storageid: DS.attr('string')
});
