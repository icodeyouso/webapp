import { moduleForModel, test } from 'ember-qunit';

moduleForModel('series', 'Unit | Model | series', {
  // Specify the other units that are required for this test.
  needs: ['model:game']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});