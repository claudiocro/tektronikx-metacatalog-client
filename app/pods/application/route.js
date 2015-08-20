import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    logout() {
      this.get('session').invalidate();
    },
    doSearch(searchValue) {
      if(!Ember.isEmpty(searchValue)) {
        this.transitionTo('modelhits.search', searchValue);
      }
    }
  }
});
