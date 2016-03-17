import Ember from 'ember';

export default Ember.Service.extend({
  data: null,

  init() {
    this._super(...arguments);

    setTimeout(() => {
      var promise = Ember.$.get('/prosecutors.json');

      this.set('data', promise);
    }, 0);
  },

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
