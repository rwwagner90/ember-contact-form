import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('contact-input', 'Integration | Component | contact input', {
  integration: true
});

test('class name applied', function(assert) {
  this.render(hbs`{{contact-input fieldName='foo'}}`);

  assert.ok(this.$('input').hasClass('foo'), 'fieldName applied as class');
});

test('id and name computed', function(assert) {
  this.render(hbs`{{contact-input fieldName='foo'}}`);

  assert.equal(this.$('input').attr('id'), 'cd-foo', 'id set');
  assert.equal(this.$('input').attr('name'), 'cd-foo', 'name set');
});
