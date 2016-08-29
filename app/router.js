import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('prosecutors', { path: '/' }, function() {
    this.route('refine');
  });
  this.route('prosecutor', { path: '/prosecutor/:name' });
});

export default Router;
