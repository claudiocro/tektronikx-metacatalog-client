import Ember from 'ember';
import { module, test } from 'qunit';
import { make, makeList } from 'ember-data-factory-guy';
import TestHelper from 'ember-data-factory-guy/factory-guy-test-helper';
import startApp from 'client/tests/helpers/start-app';


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

  visit('/');

  andThen(function() {
    fillIn('nav input', 'a');
    keyEvent('input', 'keypress', 13);
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

  visit('/modelhits/search/a');

  andThen(function() {
    assert.equal(find('table tbody tr').length, 2);
    click('table tbody tr:first-child a');
  });

  andThen(function() {
    assert.equal(currentURL(), '/modelhit/1');
  });

});
