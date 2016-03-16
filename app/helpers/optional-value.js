import Ember from 'ember';

export function optionalValue(params/*, hash*/) {
  var value = params[0];

  return Ember.isBlank(value) ? new Ember.Handlebars.SafeString('&ndash;') : value;
}

export default Ember.Helper.helper(optionalValue);
