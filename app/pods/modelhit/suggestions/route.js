import Ember from 'ember';
import Modelpage from 'client/models/modelpage';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      model: this.modelFor('modelhit'),
      catalogs: this.store.find("catalog")
    });
  },

  setupController: function(controller, model) {
    controller.set('model', model.model);
    controller.set('catalogs', model.catalogs);
  },
  actions: {
    addSugestionAsPage: function(catalogPage) {
      var model = this.store.createRecord('modelpage', {
        page: catalogPage.get('modelhit.page'),
        model: catalogPage.get('modelhit'),
        catalog: catalogPage.get('catalog')
      });

       model.save().then(
          savedModel => {
            catalogPage.set('processed', true);
            console.log('modelpage ' + savedModel.get('model.name') + savedModel.get('page') +' saved successfully');

          },
          reason => {
            console.log('error saving modelpage, reason: ' + reason);
          }
      );
    }
  }
});

