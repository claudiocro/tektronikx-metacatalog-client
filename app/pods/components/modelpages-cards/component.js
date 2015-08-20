import Ember from 'ember';

var Model = Ember.Object.extend({
  authKey:'',
  modelpage: undefined,
  year: Ember.computed.alias('modelpage.catalog.year'),

  pageUrl: function(){
    return '/pages/'+this.get('modelpage.catalog.storageid')+'/'+this.get('modelpage.page')+'.jpg?authKey='+this.get('authKey');
  }.property('modelpage.catalog')
});

var Component = Ember.Component.extend({
  classNames: ['tkx-modelpages-cards'],
  authKey: '',
  model: Ember.A(),
  gridCol: 4,

  grid: function() {
    var grid = Ember.A(),
      models = this.get('models'),
      gridCol = this.get('gridCol'),
      rows = Math.ceil(models.get('length') / this.get('gridCol'));

    for(var i=0; i<rows; i++) {
      grid.addObject(Ember.A(models.slice(i*gridCol, (i+1)*gridCol)));
    }
    return grid;
  }.property('models'),

  models: Ember.computed.map('model', function(model) {
    return Model.create({modelpage:model, authKey:this.get('authKey')});
  })

});

export default Component;

