/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-contact-form',
  included(app) {
    this._super.included(app);
    app.import('vendor/img/arrow.svg');
    app.import('vendor/img/budget.svg');
    app.import('vendor/img/check.svg');
    app.import('vendor/img/company.svg');
    app.import('vendor/img/email.svg');
    app.import('vendor/img/message.svg');
    app.import('vendor/img/radio.svg');
    app.import('vendor/img/required.svg');
    app.import('vendor/img/user.svg');
  },
  init() {
    this._super.init && this._super.init.apply(this, arguments);

    this.options = this.options || {};
    this.options.babel = this.options.babel || {};
    this.options.babel.optional = this.options.babel.optional || [];

    if (this.options.babel.optional.indexOf('es7.decorators') === -1) {
      this.options.babel.optional.push('es7.decorators');
    }
  }
};
