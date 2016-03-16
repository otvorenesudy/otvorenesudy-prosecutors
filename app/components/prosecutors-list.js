import Ember from 'ember';
import Foldable from '../mixins/foldable';

export default Ember.Component.extend(Foldable, {
  sortDefinition: ['name.last', 'name.first'],
  sortedProsecutors: Ember.computed.sort('prosecutors', 'sortDefinition'),
  foldableContent: Ember.computed.alias('sortedProsecutors'),

});
