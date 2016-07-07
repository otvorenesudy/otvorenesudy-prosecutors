import Ember from 'ember';

export default Ember.Component.extend({
  sortedPropertyDeclarations: Ember.computed('propertyDeclarations', function() {
    return this.get('propertyDeclarations').sortBy('year').reverse();
  })
});
