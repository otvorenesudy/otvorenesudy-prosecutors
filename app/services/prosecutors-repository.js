import Ember from 'ember';

export default Ember.Service.extend({
  data: null,

  init() {
    this._super(...arguments);
    var promise = new Promise((resolve, reject) => {
      Ember.$.get('/prosecutors.json').then((data) => {
        resolve(data.sortBy('name.last', 'name.middle', 'name.first'));
      });
    });

    this.set('data', promise);
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
    if (!query) {
      return this.all();
    }

    return new Promise((resolve, reject) => {
      var normalizedQuery = this._normalizeStringForSearch(query);

      this.get('data').then((data) => {
        var filtered = data.filter((e) => {
          var name = e.normalizedName || (e.normalizedName = this._normalizeStringForSearch(e.name.value));

          return name.indexOf(normalizedQuery) !== -1 ? true : false;
        });

        resolve(filtered);
      });
    });
  },

  _normalizeStringForSearch(string) {
    return latinize(string).toLowerCase();
  }
});
