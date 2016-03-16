import Ember from 'ember';

export default Ember.Service.extend({
  data: null,

  init() {
    this._super(...arguments);
    this.set('data', Ember.$.getJSON('/prosecutors.json'));
  },

  all() {
    return this.get('data');
  }
});
