import Ember from 'ember';

export default Ember.Route.extend({
	model: function(model) {
    return Ember.RSVP.hash({
      model: this.store.find("modelhit", {model:model.search}),
      searchValue: model.search
    });
	},

  setupController: function(controller, model) {
    //this._super();
    controller.set('model', model.model);
    controller.set('searchValue', model.searchValue);
  }
});
