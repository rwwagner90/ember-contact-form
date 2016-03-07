import Ember from 'ember';
import layout from './template';

export default Ember.Component.extend({
  layout,
  tagName: 'div',
  classNameBindings: [':icon'],
  idAndName: Ember.computed('fieldName', function() {
    return 'cd-' + this.get('fieldName');
  })
});
