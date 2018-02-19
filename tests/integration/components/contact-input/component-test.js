import { find, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | contact input', function(hooks) {
  setupRenderingTest(hooks);

  test('class name applied', async function(assert) {
    await render(hbs`{{contact-input fieldName='foo'}}`);

    assert.ok(find('input').classList.contains('foo'), 'fieldName applied as class');
  });

  test('id and name computed', async function(assert) {
    await render(hbs`{{contact-input fieldName='foo'}}`);

    assert.equal(find('input').id, 'cd-foo', 'id set');
    assert.equal(find('input').getAttribute('name'), 'cd-foo', 'name set');
  });
});