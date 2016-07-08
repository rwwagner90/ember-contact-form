import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'select',
  classNameBindings: [':contact-item']
});
