import Ember from 'ember';
import { moduleForComponent, test } from 'ember-qunit';
import FactoryGuy, { makeList, make, clearStore }  from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import startApp from '../../../../helpers/start-app';

var App;
moduleForComponent('catalog-pages', 'Unit | Component | catalog pages', {
  // Specify the other units that are required for this test
  // needs: ['model:modelhit'],
  unit: true,
  setup: function () {
    Ember.run(function () {
      App = startApp();
      TestHelper.setup();
    });
  },
  teardown: function () {
    Ember.run(function () {
      TestHelper.teardown();
      App.destroy();
    });
  }

});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});


test('availableCatalogs', function(assert) {
  assert.expect(4);

  // Creates the component instance
  var component = this.subject({
    modelhit: make('modelhit'),
    catalogs: makeList('catalog',2)
  });

  assert.equal(2, component.get('availableCatalogs').length);
  assert.equal(1952, Ember.get(component.get('availableCatalogs')[0], 'catalog.year'));

  component.set('catalogs', undefined);
  assert.equal(0, component.get('availableCatalogs').length);

  component.set('modelhit', undefined);
  assert.equal(0, component.get('availableCatalogs').length);

});

test('availableGridCatalogs', function(assert) {
  assert.expect(4);

  var component = this.subject({
    modelhit: make('modelhit', {start:1952,last:1962}),
    catalogs: makeList('catalog',12)
  });

  assert.equal(3, component.get('availableGridCatalogs').length, 'a');
  assert.equal(4, component.get('availableGridCatalogs')[0].length, 'b');
  assert.equal(3, component.get('availableGridCatalogs')[2].length, 'c');
  component.set('catalogs', undefined);
  assert.equal(0, component.get('availableGridCatalogs', 'd').length);
});

