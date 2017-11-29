import Component from '@ember/component';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'ul',
  classNameBindings: [':cd-form-list', ':contact-item']
});
