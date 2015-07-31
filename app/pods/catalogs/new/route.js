import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'catalog.edit',

  model: function() {
    return this.store.createRecord('catalog');
  },

  actions: {
    save: function(){
      this.get('controller.model').save();
    }
  }

});
