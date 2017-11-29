import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'li',
  isCheckbox: equal('type', 'checkbox'),
  isRadio: equal('type', 'radio'),
  id: computed('fieldName', function() {
    let fieldName = this.get('fieldName');
    return `cd-${fieldName}`;
  })
});
