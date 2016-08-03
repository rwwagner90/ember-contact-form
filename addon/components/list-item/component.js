import Ember from 'ember';
import layout from './template';
import computed from 'ember-computed-decorators';
const { Component } = Ember;

export default Component.extend({
  layout,
  tagName: 'li',
  @computed('fieldName')
  id(fieldName) {
    return `cd-${fieldName}`;
  }
});
