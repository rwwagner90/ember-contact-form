import Component from '@ember/component';
import { equal } from '@ember/object/computed';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['contact-item', 'icon'],
  classNameBindings: ['textarea:message'],

  textarea: false,

  isEmail: equal('type', 'email')
});
