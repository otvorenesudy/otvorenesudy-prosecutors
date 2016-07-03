import Ember from 'ember';

export default Ember.Route.extend({
  repository: Ember.inject.service('prosecutors-repository'),
  queryParams: {
    query: {
      refreshModel: true
    }
  },

  model(params) {
    if (params.query) {
      return this.get('repository').search(params.query);
    } else {
      return this.get('repository').all();
    }
  },

  setupController(controller, model) {
    controller.set('model', model);
  },

  actions: {
    loading() {
      var loadingState = this.get('isLoaded');

      this.set('isLoaded', true);

      return !loadingState;
    }
  }
});
