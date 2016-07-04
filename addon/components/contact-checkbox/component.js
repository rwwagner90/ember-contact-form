import Ember from 'ember';
import layout from './template';
import ContactInput from '../contact-input/component';

export default ContactInput.extend({
  layout,
  tagName: 'li'
});
