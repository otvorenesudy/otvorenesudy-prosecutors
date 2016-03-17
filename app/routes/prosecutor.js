import Ember from 'ember';

export default Ember.Route.extend({
  repository: Ember.inject.service('prosecutors-repository'),

  model(params) {
    var name = params.name.replace(/\+/g, ' ');

    return this.get('repository').find(name);
  },

  setupController(controller, model) {
    controller.set('model', model);
  },

  serialize(prosecutor) {
    return { name: prosecutor.name.value.replace(/\s/g, '+') }
  },

  resetScrollOnEnter: Ember.on('activate', function() { 
    window.scrollTo(0, 440);
  })
});
