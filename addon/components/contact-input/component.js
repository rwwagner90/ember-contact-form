import Component from '@ember/component';
import { computed } from '@ember/object';
import { equal } from '@ember/object/computed';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'div',
  classNames: ['contact-item', 'icon'],
  classNameBindings: ['textarea:message'],

  textarea: false,

  isEmail: equal('type', 'email'),

  idAndName: computed('fieldName', function() {
    let fieldName = this.get('fieldName');
    return `cd-${fieldName}`;
  })
});
