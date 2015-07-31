import DS from 'ember-data';

export default DS.Model.extend({
  model: DS.belongsTo('modelhit'),
  catalog: DS.belongsTo('catalog', {async:true}),
  page: DS.attr('number')
});
