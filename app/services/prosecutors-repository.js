import Ember from 'ember';
import moment from 'moment';

export default Ember.Service.extend({
  data: null,
  url: 'https://raw.githubusercontent.com/otvorenesudy/otvorenesudy-data/master/prosecutors-property-declarations-20160815161604.json',
  updatedAt: Ember.computed('url', function() {
    var datetime = this.get('url').match(/(\d{4}\d{2}\d{2}\d{2}\d{2}\d{2}).json$/)[1];

    return moment(datetime, 'YYYYMMDDhhmmss').toDate();
  }),

  init() {
    this._super(...arguments);
    var promise = new Ember.RSVP.Promise((resolve) => {
      Ember.$.getJSON(this.get('url')).then((data) => {
        resolve(data.sortBy('name.last', 'name.middle', 'name.first'));
      });
    });

    this.set('data', promise);
  },

  all() {
    return this.get('data');
  },

  find(name) {
    return new Ember.RSVP.Promise((resolve, reject) => {
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
    if (!query || query.length <= 1) {
      return this.all();
    }

    return new Ember.RSVP.Promise((resolve) => {
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
