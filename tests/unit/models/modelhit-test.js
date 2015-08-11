import { moduleForModel, test} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('modelhit', {
  // Specify the other units that are required for this test.
  //needs: ['model:modelpage']
  needs: ['model:modelpage', 'model:catalog']
});

test('it exists', function(assert) {
  var model = this.subject();

  assert.ok(!!model);
});

test('foundInYearsRange | start and last', function(assert) {
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


test('foundInYearsRange | change modelpages', function(assert) {
  var model = this.subject();

  Ember.run(function(){
    var catalog = model.store.createRecord('catalog', {year:21});
    var modelpage = model.store.createRecord('modelpage',{
      page: 1
    });
    modelpage.set('catalog', catalog);

    model.set('start', 20);
    model.set('last', 22);
    model.set('page', 1);
    model.set('modelpages', Ember.A([modelpage]));
    assert.deepEqual(model.get('foundInYearsRange'), [20,22]);

    model.set('modelpages', Ember.A());
    catalog.set('year', 20);
    model.set('modelpages', Ember.A([modelpage]));
    assert.deepEqual(model.get('foundInYearsRange'), [21,22]);

    model.set('modelpages', Ember.A());
    catalog.set('year', 19);
    model.set('modelpages', Ember.A([modelpage]));
    assert.deepEqual(model.get('foundInYearsRange'), [20,21,22]);

    model.set('modelpages', Ember.A());
    catalog.set('year', 20);
    modelpage.set('page', 2);
    model.set('modelpages', Ember.A([modelpage]));
    assert.deepEqual(model.get('foundInYearsRange'), [20,21,22]);
  });
});

test('foundInYearsRange | change page', function(assert) {
  var model = this.subject();

  Ember.run(function(){
    var catalog = model.store.createRecord('catalog', {year:21});
    var modelpage = model.store.createRecord('modelpage',{
      page: 1
    });
    modelpage.set('catalog', catalog);

    model.set('start', 20);
    model.set('last', 22);
    model.set('page', 2);
    model.set('modelpages', Ember.A([modelpage]));
    assert.deepEqual(model.get('foundInYearsRange'), [20,21,22]);

    model.set('page', 1);
    assert.deepEqual(model.get('foundInYearsRange'), [20,22]);
  });
});

