import Ember from 'ember';
import DS from 'ember-data';

export default DS.Model.extend({
  modelpages: DS.hasMany('modelpage'),
  model: DS.attr('string'),
  name: DS.attr('string'),
  foundin: DS.attr('number'),
  start: DS.attr('number'),
  last: DS.attr('number'),
  page: DS.attr('number'),
  page1: DS.attr('number'),
  tag: DS.attr('string'),


  foundInYearsRange: function(){
    if(Ember.isNone(this.get('start'))) {
      return Ember.A();
    } else if(Ember.isNone(this.get('last'))) {
      return Ember.A([this.get('start')]);
    } else {

      var self = this;
      var range = Ember.A();
      var modelpage = this.get('modelpages');
      var hit;

      var findHit = function(item) {
        return item.get('page') === self.get('page') && i ===item.get('catalog.year');
      };
      for(var i=this.get('start'); i<=this.get('last'); i++){
        hit = modelpage.find(findHit);
        if(!hit) {
          range.push(i);
        }
      }

      return range;
    }
  }.property('start','last')
});
