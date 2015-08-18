import { moduleForModel, test} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('catalog', {
  // Specify the other units that are required for this test.
  needs: ['model:modelpage']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});


test('displayName | undefined', function(assert) {
  var model = this.subject();

  assert.equal(undefined, model.get('displayName'));

  Ember.run(function(){

    model.set('name', 'The Name');
    assert.equal(model.get('displayName'), 'The Name - undefined');

    model.set('name', 'The Name');
    model.set('year', 2015);
    assert.equal(model.get('displayName'), 'The Name - 2015');

    model.set('name', undefined);
    assert.equal(model.get('displayName'), 'undefined - 2015');
  });
});
