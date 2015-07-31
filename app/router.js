import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  /*this.resource('modelhit', function() {
    this.route('search', { path: '/search/:search' });
    this.route('model', { path: '/model/:modelhit_id' });
    this.route('edit', { path: '/edit/:modelhit_id' });
    this.route('new', { path: '/new' });
  });*/

  this.route('register');
  this.route('login');

  this.resource('modelhits', { path: '/modelhits' }, function(){
    this.route('new');
    this.route('search', { path: '/search/:search' });
  });

  this.resource('modelhit', { path: '/modelhit/:modelhit_id' }, function() {
    this.route('edit');
    this.route('suggestions');
  });

  this.resource('catalogs', { path: '/catalogs' }, function(){
    this.route('new');
  });

  /*
    this.route("catalogs", function() {
        this.route("catalog", {
            path: ":catalog_id"
        });

        this.route("create", {
            path: "create"
        });
    });
  */
  this.resource('catalog', { path: "/catalog/:catalog_id" },function() {
    this.route('edit');
  });
});
