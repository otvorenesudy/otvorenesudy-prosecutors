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
  }
});
