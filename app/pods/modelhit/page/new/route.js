import Ember from 'ember';
import DestroyNew from 'tektronix-metacatalog-client/mixins/destroy-new-model';

export default Ember.Route.extend(DestroyNew, {

  model() {
    var self = this;
    return this.store.createRecord('modelpage', {
      model: self.modelFor('modelhit'),
      catalog: null
    });
    // return Ember.RSVP.hash({
    //   model: this.store.createRecord('modelpage', {
    //     model: self.modelFor('modelhit'),
    //     catalog: null
    //   }),
    //   catalogs: this.store.findAll("catalog")
    // });
  },

  setupController(controller, model) {
    this._super(controller, model);
    this.store.findAll("catalog").then(
      (catalogs) => {
        controller.set('catalogs', catalogs);
      });
  },

  actions: {
    cancel() {
      this.transitionTo('index');
    },
    update() {
      return this.currentModel.save().then(
          savedModel => {
            console.log('modelpage ' + savedModel.get('page') + ' saved successfully');
            this.transitionTo('modelhit.index', savedModel.get('model'));
          },
          reason => {
            console.log('error saving modelpage, reason: ' + reason);
            this.transitionTo('modelhit.index', this.currentModel.get('model'));
          }
      );
    },
    delete() {
      return this.currentModel.destroyRecord().then(
          () => this.transitionTo('modelhit.index', this.currentModel.get('model')),
          reason => {
            console.log('error deleting modelpage, reason was: ' + reason);
            this.transitionTo('modelhit.index', this.currentModel.get('model'));
          }
      );
    }
  }
});
