import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('modelpage', {

  default: {
    catalog: FactoryGuy.belongsTo('catalog'),
    //model: FactoryGuy.belongsTo('modelhit'),
    page: 2
  }

});
