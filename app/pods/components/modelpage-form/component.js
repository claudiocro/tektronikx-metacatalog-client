import Ember from 'ember';

const {computed,observer} = Ember;

export default Ember.Component.extend({
  catalogs: [],
  selectedObject: null,
  _doNotSet: false, //todo: bad
  objectSelected: observer('selectedObject', function() {
    if(!this._doNotSet) {
      this._doNotSet = true;
      this.set('model.catalog', this.get('selectedObject'));
      this._doNotSet = false;
    }
  }),
  clearSelected: observer('model.catalog', function() {
    if(!this._doNotSet) {
      var self = this;
      this.get('model.catalog').then(function(cat) {
        self._doNotSet = true;
        self.set('selectedObject', cat);
        self._doNotSet = false;
      });
    }
  }),
  catalogsLoaded: computed.notEmpty('catalogs'),

  actions: {
    update() {
      this.sendAction('update');
    },

    cancel() {
      this.sendAction('cancel');
    }
  }
});
