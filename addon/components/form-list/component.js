import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'ul',
  classNames: ['cd-form-list', 'contact-item']
});
