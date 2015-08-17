import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var self = this;
    return Ember.RSVP.hash({
      model: this.store.createRecord('modelpage', {
        model: self.modelFor('modelhit')
      }),
      catalogs: this.store.findAll("catalog")
    });
  }
});
