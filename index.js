/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-contact-form',
  included() {
    this._super.included.apply(this, arguments);

    this.import('vendor/img/arrow.svg');
    this.import('vendor/img/budget.svg');
    this.import('vendor/img/check.svg');
    this.import('vendor/img/company.svg');
    this.import('vendor/img/email.svg');
    this.import('vendor/img/message.svg');
    this.import('vendor/img/radio.svg');
    this.import('vendor/img/required.svg');
    this.import('vendor/img/user.svg');
  }
};
