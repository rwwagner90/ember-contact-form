import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      options: [{
        text: 'Select Budget',
        value: '0'
      }, {
        text: '< $5000',
        value: '1'
      }, {
        text: '$5000 - $10000',
        value: '2'
      }, {
        text: '> $10000',
        value: '3'
      }]
    }
  }
});
