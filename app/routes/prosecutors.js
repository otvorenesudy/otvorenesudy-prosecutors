import Ember from 'ember';

export default Ember.Route.extend({
  repository: Ember.inject.service('prosecutors-repository'),

  model() {
    return this.get('repository').all();
  },

  setupController(controller, model) {
    controller.set('model', model);
  }
});
