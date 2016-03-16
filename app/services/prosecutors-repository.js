import Ember from 'ember';

export default Ember.Service.extend({
  data: null,

  init() {
    this._super(...arguments);
    var promise = Ember.$.get('/prosecutors.json');

    this.set('data', promise);
  },

  all() {
    return this.get('data');
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
