import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('modelhit', {
  traits: {
    with_modelpages: {
      modelpages: FactoryGuy.hasMany('modelpage', 2)
    }
  },

  default: {
    name: 'A name',
    model: 'B model',
    start: 1952,
    last: 1955
  }

});
