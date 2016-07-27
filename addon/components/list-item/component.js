import Ember from 'ember';
import layout from './template';
const {Component, computed} = Ember;

export default Component.extend({
  layout,
  tagName: 'li',
  id: computed('fieldName', function() {
    let fieldName = this.get('fieldName');

    return `cd-${fieldName}`;
  })
});
