import { prettyJoin } from 'opencourts-prosecutors/helpers/pretty-join';
import { module, test } from 'qunit';

module('Unit | Helper | pretty join');

test('joins array of values with dot', function(assert) {
  let result = prettyJoin(['First', 'Second']);

  assert.equal(result, 'First · Second');
});
