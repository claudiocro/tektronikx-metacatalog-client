import Ember from 'ember';
import { module, test } from 'qunit';
import { make, makeList } from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import startApp from 'tektronix-metacatalog-client/tests/helpers/start-app';

import ModelhitPage from 'tektronix-metacatalog-client/tests/acceptance/pages/modelhit';

var application;

module('Acceptance | modelhit-index', {
  beforeEach: function() {
    application = startApp();
    TestHelper.setup();
  },

  afterEach: function() {
    TestHelper.teardown();
    Ember.run(application, 'destroy');
  }
});

test('visiting /modelhit/2', function(assert) {
  TestHelper.handleFindAll('catalog', 10);
  var modelhit = make('modelhit', 'with_modelpages');
  authenticateSession();

  ModelhitPage.visit(modelhit.id);

  andThen(function() {
    assert.equal(ModelhitPage.cardsLength(), 2);
  });
});
