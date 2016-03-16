import Ember from 'ember';

export default Ember.Mixin.create({
  foldableContent: Ember.computed(function() { return [] }),
  initialFoldableCount: 50,
  foldableCount: Ember.computed('initialFoldableCount', function() { return this.get('initialFoldableCount'); }),

  init() {
    this._super(...arguments);
   },

  foldedContent: Ember.computed('foldableContent.@each', 'foldableCount', function() {
    var array = this.get('foldableContent');

    return array.slice(0, this.get('foldableCount'));
  }),

  canUnfoldMore: Ember.computed('foldableContent.@each', 'foldableCount', function() {
    var length = this.get('foldableContent.length');

    return length > this.get('foldableCount') ? true : false;
  }),

  actions: {
    unfoldMore() {
      var count = this.get('foldableCount');

      this.set('foldableCount', count + this.get('initialFoldableCount'));
    }
  }
});
