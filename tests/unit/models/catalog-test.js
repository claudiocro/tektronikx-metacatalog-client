import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('catalog', {
  // Specify the other units that are required for this test.
  needs: ['model:modelpage']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});
