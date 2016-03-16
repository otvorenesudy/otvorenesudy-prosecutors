import Ember from 'ember';

export function formatPropertyDeclarationsYears(params, hash) {
  var declarations = params[0];

  return declarations.mapBy('year').join(', ');
}

export default Ember.Helper.helper(formatPropertyDeclarationsYears);
