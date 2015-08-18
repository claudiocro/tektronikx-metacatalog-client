import Ember from 'ember';
import { module, test } from 'qunit';
import { make, makeList } from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import startApp from 'tektronix-metacatalog-client/tests/helpers/start-app';

import CatalogsPage from 'tektronix-metacatalog-client/tests/acceptance/pages/catalogs';

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

  CatalogsPage.visit();
  andThen(function() {
    assert.equal(CatalogsPage.listLength(), 10);
    CatalogsPage.clickFirstItemInList();
  });

  andThen(function() {
    assert.equal(currentURL(), '/catalog/1');
  });
});
