import Ember from 'ember';
import layout from './template';
const {Component, computed} = Ember;

export default Component.extend({
  layout,
  tagName: 'div',
  classNameBindings: [':icon', 'textarea:message'],
  idAndName: computed('fieldName', function() {
    return 'cd-' + this.get('fieldName');
  }),
  textarea: false
});
