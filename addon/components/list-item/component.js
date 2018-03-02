import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'li',
  isCheckbox: equal('type', 'checkbox'),
  isRadio: equal('type', 'radio')
});
