import { find, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | list item', function(hooks) {
  setupRenderingTest(hooks);

  test('id set', async function(assert) {
    await render(hbs`{{list-item fieldName='foo' type='checkbox'}}`);

    assert.equal(find('input').id, 'foo', 'id set');
  });
});
