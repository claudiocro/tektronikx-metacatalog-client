import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    var self = this;
    return Ember.RSVP.hash({
      model: this.store.createRecord('modelpage', {
        model: self.modelFor('modelhit'),
        catalog: null
      }),
      catalogs: this.store.findAll("catalog")
    });
  },

  actions: {
    cancel() {
      this.transitionTo('index');
    },
    update(model) {
      return model.save().then(
          savedModel => {
            console.log('modelpage ' + savedModel.get('page') + ' saved successfully');
            this.transitionTo('modelhit.index', savedModel.get('model'));
          },
          reason => {
            console.log('error saving modelpage, reason: ' + reason);
            this.transitionTo('modelhit.index', model.get('model'));
          }
      );
    },
    delete(model) {
      return model.destroyRecord().then(
          () => this.transitionTo('modelhit.index', model.get('model')),
          reason => {
            console.log('error deleting modelpage, reason was: ' + reason);
            this.transitionTo('modelhit.index', model.get('model'));
          }
      );
    }
  }
});
