import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {

  this.route('register');
  this.route('login');

  this.resource('modelhits', { path: '/modelhits' }, function(){
    this.route('new');
    this.route('search', { path: '/search/:search' });
  });

  this.resource('modelhit', { path: '/modelhit/:modelhit_id' }, function() {
    this.route('edit');
    this.route('suggestions');

    this.route('page.edit', { path: '/page/:modelpage_id/edit' });
    this.route('page.new', { path: '/page/new' });
  });

  this.resource('catalogs', { path: '/catalogs' }, function(){
    this.route('new');
  });

  this.resource('catalog', { path: "/catalog/:catalog_id" },function() {
    this.route('edit');
  });
});
