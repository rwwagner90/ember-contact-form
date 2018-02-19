import { findAll, render } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | form list', function(hooks) {
  setupRenderingTest(hooks);

  test('checkboxes', async function(assert) {
    this.set('checkboxes', [
      {
        checked: false,
        fieldName: 'checkbox-1',
        text: 'Option 1'
      },
      {
        checked: true,
        fieldName: 'checkbox-2',
        text: 'Option 2'
      },
      {
        checked: true,
        fieldName: 'checkbox-3',
        text: 'Option 3'
      }
    ]);

    await render(hbs`{{form-list options=checkboxes type='checkbox'}}`);

    assert.equal(findAll('input').length, 3);
    assert.equal(findAll('input:checked').length, 2);
  });

  test('radio buttons', async function(assert) {
    this.set('radioButtons', [
      {
        checked: true,
        fieldName: 'radio-1',
        name: 'radio-button',
        text: 'Choice 1'
      },
      {
        checked: false,
        fieldName: 'radio-2',
        name: 'radio-button',
        text: 'Choice 2'
      },
      {
        checked: false,
        fieldName: 'radio-3',
        name: 'radio-button',
        text: 'Choice 3'
      }
    ]);

    await render(hbs`{{form-list groupValue='radio-2' options=radioButtons type='radio'}}`);

    assert.equal(findAll('input').length, 3);
    assert.equal(findAll('input:checked').length, 1);
  });
});