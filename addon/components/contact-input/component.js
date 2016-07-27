import Ember from 'ember';
import layout from './template';
import computed from 'ember-computed-decorators';
const {Component} = Ember;

export default Component.extend({
  layout,
  tagName: 'div',
  classNameBindings: [ ':contact-item', ':icon', 'textarea:message' ],
  @computed('fieldName')
  idAndName(fieldName) {
    return `cd-${fieldName}`;
  },
  textarea: false
});
