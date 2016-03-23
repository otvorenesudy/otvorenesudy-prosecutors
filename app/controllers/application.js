import Ember from 'ember';

export default Ember.Controller.extend({
  repository: Ember.inject.service('prosecutors-repository'),
  queryParams: ['l'],

  l: 'sk'
});
