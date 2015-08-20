import Ember from 'ember';


var Model = Ember.Object.extend({
  authKey:'',
  catalog: undefined,
  modelhit: undefined,
  processed: false, //todo: this has no effect at the moment

  pageUrl: function(){
    return '/pages/'+this.get('catalog.storageid')+'/'+this.get('modelhit.page')+'.jpg?authKey='+this.get('authKey');
  }.property('catalog', 'modelhit')
});

var Component = Ember.Component.extend({
  authKey:'',
  modelhit: undefined,
  catalogs: Ember.A(),
  gridCol: 4,

  availableGridCatalogs: function() {
    var grid = Ember.A(),
      catalogs = this.get('availableCatalogs'),
      gridCol = this.get('gridCol'),
      rows = Math.ceil(this.get('catalogs.length') / this.get('gridCol'));

    for(var i=0; i<rows; i++) {
      grid.addObject(Ember.A(catalogs.slice(i*gridCol, (i+1)*gridCol)));
    }
    return grid;
  }.property('availableCatalogs'),

  availableCatalogs: function(){
    var  self = this,
      acatalogs = Ember.A();

    if(!Ember.isEmpty(this.get('modelhit.foundInYearsRange')) &&
        !Ember.isEmpty(this.get('catalogs'))) {
      this.get('modelhit.foundInYearsRange').forEach(function(item){
        self.get('catalogs').filterBy('year', item).forEach(function (catalog) {
          acatalogs.push(Model.create({
            catalog: catalog,
            modelhit: self.get('modelhit'),
            authKey: self.get('authKey')
          }));
        });
      });
    }

    return acatalogs;
  }.property('modelhit.foundInYearsRange','catalogs'),

  actions: {
    addSugestionAsPage: function(model) {
      this.sendAction('action', model);
    }
  }
});

export {Component as default, Model};

