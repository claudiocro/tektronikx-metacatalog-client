import Ember from 'ember';
import { module, test } from 'qunit';
import { make, makeList } from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import startApp from 'client/tests/helpers/start-app';


var application;

module('Acceptance | catalog', {
  beforeEach: function() {
    application = startApp();
    TestHelper.setup();
  },

  afterEach: function() {
    TestHelper.teardown();
    Ember.run(application, 'destroy');
  }
});

test('visiting /catalogs', function(assert) {
  TestHelper.handleFindAll('catalog', 10);
  authenticateSession();

  visit('/catalogs');
  andThen(function() {
    assert.equal(find('table tbody tr').length, 10);
    click('table tbody tr:first-child a');
  });

  andThen(function() {
    assert.equal(currentURL(), '/catalog/1');
  });
});
