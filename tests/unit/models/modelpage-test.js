import { moduleForModel, test } from 'ember-qunit';
import Ember from 'ember';

moduleForModel('modelpage', 'Unit | Model | modelpage', {
  // Specify the other units that are required for this test.
  needs: ['model:modelhit','model:catalog']
});

test('it exists', function(assert) {
  var model = this.subject();
  // var store = this.store();
  assert.ok(!!model);
});


test('foundInYearsRange | start and last', function(assert) {
  var model = this.subject();

  assert.equal('', model.get('pagespan'));

  Ember.run(function(){

    model.set('page', 20);
    assert.equal('20', model.get('pagespan'));

    model.set('pagecount', 2);
    assert.equal('20 - 22', model.get('pagespan'));

    model.set('pagecount', 1);
    assert.equal('20', model.get('pagespan'));

    model.set('pagecount', 0);
    assert.equal('20', model.get('pagespan'));
  });
});
