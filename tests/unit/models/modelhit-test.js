import { moduleForModel, test} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('modelhit', {
  // Specify the other units that are required for this test.
  needs: ['model:modelpage']
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});

test('foundInYearsRange', function(assert) {
  var model = this.subject();

  assert.equal(0, model.get('foundInYearsRange'));

  Ember.run(function(){

    model.set('start', 20);

    assert.deepEqual(model.get('foundInYearsRange'), [20]);

    model.set('last', 21);
    assert.deepEqual(model.get('foundInYearsRange'), [20,21]);

    model.set('last', 22);
    assert.deepEqual(model.get('foundInYearsRange'), [20,21,22]);

    model.set('start', 21);
    assert.deepEqual(model.get('foundInYearsRange'), [21,22]);

    model.set('start', undefined);
    assert.equal(0, model.get('foundInYearsRange'));

  });
});
