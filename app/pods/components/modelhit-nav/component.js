import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['right'],

  actions: {
    newModelpage() {
      this.sendAction('newModelpage', this.get('model'));
    }
  }
});
