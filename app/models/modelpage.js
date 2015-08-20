import Ember from 'ember';
import DS from 'ember-data';

const {computed} = Ember;

export default DS.Model.extend({
  model: DS.belongsTo('modelhit'),
  catalog: DS.belongsTo('catalog', {async: true}),
  page: DS.attr('number'),
  pagecount: DS.attr('number'),


  pagespan: computed('page', 'pagecount', function() {
    var pagespan = '';
    if(this.get('page')) {
      pagespan = this.get('page');
      if(this.get('pagecount') && this.get('pagecount')>1) {
        pagespan += " - " + (this.get('page') + this.get('pagecount'));
      }
    }
    return pagespan;
  })
});
