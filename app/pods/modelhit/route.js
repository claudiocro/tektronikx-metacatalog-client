import Ember from 'ember';
import AuthenticatedRouteMixin from 'simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
    model: function(model) {
    return this.store.find("modelhit", model.modelhit_id);
  },

  actions: {
    cancel() {
      this.transitionTo('index');
    },
    update(model) {
      return model.save().then(
          savedModel => {
            console.log('modelhit ' + savedModel.get('name') + ' saved successfully');
            this.transitionTo('index');
          },
          reason => {
            console.log('error saving modelhit, reason: ' + reason);
            this.transitionTo('index');
          }
      );
    },
    delete(model) {
      return model.destroyRecord().then(
          () => this.transitionTo('index'),
          reason => {
            console.log('error deleting modelhit, reason was: ' + reason);
            this.transitionTo('index');
          }
      );
    }
  }
});
