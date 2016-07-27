import Ember from 'ember';
import layout from './template';
const {Component, computed} = Ember;

export default Component.extend({
  layout,
  tagName: 'div',
  classNameBindings: [ ':contact-item', ':icon', 'textarea:message' ],
  idAndName: computed('fieldName', function() {
    let fieldName = this.get('fieldName');

    return `cd-${fieldName}`;
  }),
  textarea: false
});
