import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('form-list', 'Integration | Component | form list', {
  integration: true
});

test('checkboxes', function(assert) {
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

  this.render(hbs`{{form-list options=checkboxes type='checkbox'}}`);

  assert.equal(this.$('input').length, 3);
  assert.equal(this.$('input:checked').length, 2);
});

test('radio buttons', function(assert) {
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

  this.render(hbs`{{form-list groupValue='radio-2' options=radioButtons type='radio'}}`);

  assert.equal(this.$('input').length, 3);
  assert.equal(this.$('input:checked').length, 1);
});
