import Ember from 'ember';
import Foldable from '../mixins/foldable';

export default Ember.Component.extend(Foldable, {
  foldableContent: Ember.computed.alias('prosecutors')
});
