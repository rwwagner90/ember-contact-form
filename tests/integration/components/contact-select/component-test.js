import { findAll, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | contact select', function(hooks) {
  setupRenderingTest(hooks);

  test('options rendered correctly', async function(assert) {
    this.set('options', [
      {
        text: 'foo',
        value: 1
      },
      {
        text: 'bar',
        value: 2
      },
      {
        text: 'baz',
        value: 3
      }
    ]);

    await render(hbs`{{contact-select options=options}}`);

    assert.equal(findAll('option').length, 3, '3 options added');
    assert.equal(this.$('option')[0].value, 1, 'first option value correct');
    assert.equal(this.$('option').first().text().trim(), 'foo', 'first option text correct');
  });
});