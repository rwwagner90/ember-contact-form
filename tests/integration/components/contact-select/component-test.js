import {moduleForComponent, test} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contact-select', 'Integration | Component | contact select', {
  integration: true
});

test('options rendered correctly', function (assert) {
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

  this.render(hbs`{{contact-select options=options}}`);

  assert.equal(this.$('option').length, 3, '3 options added');
  assert.equal(this.$('option')[0].value, 1, 'first option value correct');
  assert.equal(this.$('option').first().text().trim(), 'foo', 'first option text correct');
});
