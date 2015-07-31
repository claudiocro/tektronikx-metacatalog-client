import Ember from 'ember';

export default Ember.Route.extend({
  templateName: 'modelhit.edit',

  model: function() {
    return this.store.createRecord('modelhit');
  },

  actions: {
      save: function(){
    this.get('controller.model').save();
      }
  }

});
