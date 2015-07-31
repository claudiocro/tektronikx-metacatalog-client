import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['readonly'],
  readonly: true,
  actions: {
    save: function() {
      this.sendAction('action', this.get('model'));
    }
  }
});
