import Ember from 'ember';
import { module, test } from 'qunit';
import { make, makeList } from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import startApp from 'tektronix-metacatalog-client/tests/helpers/start-app';

import ModelpagePage from 'tektronix-metacatalog-client/tests/acceptance/pages/modelpage';
import ModelhitPage from 'tektronix-metacatalog-client/tests/acceptance/pages/modelhit';

var application;

module('Modelpage | crud', {
  beforeEach: function() {
    application = startApp();
    TestHelper.setup();
  },

  afterEach: function() {
    TestHelper.teardown();
    Ember.run(application, 'destroy');
  }
});


test('new / by url', function(assert) {
  var modelhits = makeList('modelhit',3);
  TestHelper.handleFindAll('catalog', 10);
  authenticateSession();

  ModelpagePage.visitNew(modelhits.objectAt(1).get('id'));

  andThen(function() {
    assert.equal(10+1, ModelpagePage.catalogsSelectLength());
  });
});

test('new / by modelhit', function(assert) {
  var modelhits = makeList('modelhit',3);
  TestHelper.handleFindAll('catalog', 10);
  authenticateSession();
  promoteSessionToAdmin();

  ModelhitPage.visit(modelhits.objectAt(1).get('id'));

  andThen(function() {

    console.log(currentURL());
    ModelhitPage.clickNewPage();
  });

  andThen(function() {
    assert.equal(currentURL(), '/modelhit/2/page/new');
  });

  andThen(function() {
    assert.equal(10+1, ModelpagePage.catalogsSelectLength());
  });
});
