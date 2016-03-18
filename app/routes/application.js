import Ember from 'ember';

export default Ember.Route.extend({
  i18n: Ember.inject.service(),

  queryParams: {
    l: {
      refreshModel: true
    }
  },

  model(params) {
    this.set('i18n.locale', params.l);

    return null;
  }
});
