import Ember from 'ember';
import layout from './template';
const {Component} = Ember;

export default Component.extend({
  layout,
  tagName: 'ul',
  classNameBindings: [ ':cd-form-list', ':contact-item' ]
});
