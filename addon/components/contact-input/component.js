import Component from 'ember-component';
import computed from 'ember-computed';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'div',
  classNameBindings: [':contact-item', ':icon', 'textarea:message'],
  textarea: false,
  idAndName: computed('fieldName', function() {
    let fieldName = this.get('fieldName');
    return `cd-${fieldName}`;
  })
});
