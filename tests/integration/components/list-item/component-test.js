import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('list-item', 'Integration | Component | list item', {
  integration: true
});

test('id computed', function(assert) {
  this.render(hbs`{{list-item fieldName='foo' type='checkbox'}}`);

  assert.equal(this.$('input').attr('id'), 'cd-foo', 'id set');
});
