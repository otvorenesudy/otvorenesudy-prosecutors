import Ember from 'ember';

export function prettyJoin(values, hash) {
  let delimiter = hash.delimiter || '·';

  return values.filter(function(value) {
    return value;
  }).join(` ${delimiter} `);
}

export default Ember.Helper.helper(prettyJoin);
