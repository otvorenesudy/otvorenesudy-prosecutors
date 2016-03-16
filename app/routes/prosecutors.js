import Ember from 'ember';

export default Ember.Route.extend({
  repository: Ember.inject.service('prosecutors-repository'),
  queryParams: {
    q: {
      refreshModel: true
    }
  },

  model(params) {
    if (params.q) {
      return this.get('repository').search(params.q);
    } else {
      return this.get('repository').all();
    }
  },

  setupController(controller, model) {
    controller.set('model', model);
  }
});
