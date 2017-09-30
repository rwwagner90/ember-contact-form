import Component from 'ember-component';
import computed from 'ember-computed';
import layout from './template';

export default Component.extend({
  layout,
  tagName: 'li',
  isCheckbox: computed.equal('type', 'checkbox'),
  isRadio: computed.equal('type', 'radio'),
  id: computed('fieldName', function() {
    let fieldName = this.get('fieldName');
    return `cd-${fieldName}`;
  })
});
