import Ember from 'ember';

var DataProxy = Ember.ArrayProxy.extend({
  content: [],

  lookupDataAfterInit: Ember.on('init', function() {
    Ember.$.get('/prosecutors.json').then((data) => {
      this.set('content', data);
    });
  })
});

export default Ember.Service.extend({
  data: DataProxy.create(),

  all() {
    return this.get('data');
  },

  find(name) {
    return new Promise((resolve, reject) => {
      this.get('data').then((data) => {
        var prosecutor = data.find(function(e) {
          return e.name.value === name;
        });

        if (prosecutor) {
          resolve(prosecutor);
        } else {
          reject(`Could not find prosecutor with name ${name}.`);
        }
      });
    });
  },

  search(query) {
    return new Promise((resolve, reject) => {
      this.get('data').then((data) => {
        var filtered = data.filter(function(e) {
          return e.name.value.toLowerCase().indexOf(query.toLowerCase()) !== -1 ? true : false;
        });

        resolve(filtered);
      })
    });
  }
});
