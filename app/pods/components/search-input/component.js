import Ember from 'ember';

export default Ember.Component.extend({
  currentRouteName:undefined,
  showOnRoute: undefined,
  searchValue: '',
  focused: false,

  hasSearchValue: Ember.computed.empty('searchValue'),
  showHint: function(){
    if(Ember.isPresent(this.get('showOnRoute')) && this.get('showOnRoute') !== this.get('currentRouteName')) {
      return false;
    }

    return !(!this.get('hasSearchValue') || this.get('focused'));
  }.property('hasSearchValue', 'focused', 'currentRouteName', 'showOnRoute'),

  actions: {
    doSearch: function() {
      this.sendAction('doSearch', this.get('searchValue'));
    },
    focusIn: function() {
      this.set('focused', true);
    },

    focusOut: function() {
      this.set('focused', false);
    }
  }
});
