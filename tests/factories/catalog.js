import FactoryGuy from 'ember-data-factory-guy';

FactoryGuy.define('catalog', {
  sequences: {
    year: function(num) {
      return 1951 + num;
    },
    storageid: function(num) {
      return 'std-'+(1951+num)+'-1';
    }
  },
  default: {
    year: FactoryGuy.generate('year'),
    name:'Tektroniks Standart Catalog',
    storageid:FactoryGuy.generate('storageid')
  }

});
