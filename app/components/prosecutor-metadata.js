import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'span',

  canShow: Ember.computed.or('prosecutor.organisation', 'prosecutor.position', 'prosecutor.municipality'),

  initializeAsTooltip: Ember.on('didInsertElement', function() {
    this.$('[data-toggle="tooltip"]').tooltip();
  })
});
