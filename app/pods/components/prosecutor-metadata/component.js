import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  canShow: Ember.computed.notEmpty('prosecutor.organisation'),

  initializeAsTooltip: Ember.on('didInsertElement', function() {
    this.$('[data-toggle="tooltip"]').tooltip();
  })
});
