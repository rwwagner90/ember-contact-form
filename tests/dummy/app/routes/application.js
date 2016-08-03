import Ember from 'ember';
const { Route } = Ember;

export default Route.extend({
  model() {
    return {
      checkboxes: [
        {
          fieldName: 'checkbox-1',
          text: 'Option 1'
        },
        {
          fieldName: 'checkbox-2',
          text: 'Option 2'
        },
        {
          fieldName: 'checkbox-3',
          text: 'Option 3'
        }
      ],
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
      }],
      radioButtons: [
        {
          fieldName: 'radio-1',
          name: 'radio-button',
          text: 'Choice 1'
        },
        {
          fieldName: 'radio-2',
          name: 'radio-button',
          text: 'Choice 2'
        },
        {
          fieldName: 'radio-3',
          name: 'radio-button',
          text: 'Choice 3'
        }
      ]
    };
  }
});
