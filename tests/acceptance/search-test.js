import Ember from 'ember';
import { module, test } from 'qunit';
import { make, makeList } from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import startApp from 'tektronix-metacatalog-client/tests/helpers/start-app';

import IndexPage from 'tektronix-metacatalog-client/tests/acceptance/pages/index';
import ModelhitsSearchPage from 'tektronix-metacatalog-client/tests/acceptance/pages/modelhits-search';

var application;

module('Acceptance | searchflow', {
  beforeEach: function() {
    application = startApp();
    TestHelper.setup();
  },

  afterEach: function() {
    TestHelper.teardown();
    Ember.run(application, 'destroy');
  }
});

test('visiting / and search', function(assert) {
  var modelhits = makeList('modelhit',3);

  TestHelper.handleFindQuery('modelhit', ['model'], modelhits);
  authenticateSession();

  IndexPage.visit();

  andThen(function() {
    IndexPage.fillInSearch('a');
    IndexPage.doSearch();
  });

  andThen(function() {
    assert.equal(currentURL(), '/modelhits/search/a');
  });
});

test('visiting /modelhits/search/a', function(assert) {
  TestHelper.handleFindAll('catalog', 10);
  var modelhits = makeList('modelhit',2);

  TestHelper.handleFindQuery('modelhit', ['model'], modelhits);
  authenticateSession();

  ModelhitsSearchPage.visitByTerm('a');

  andThen(function() {
    assert.equal(ModelhitsSearchPage.listLength(), 2);
    ModelhitsSearchPage.clickFirstItemInList();
  });

  andThen(function() {
    assert.equal(currentURL(), '/modelhit/1');
  });

});
