'use strict';

define('dummy/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'router.js should pass ESLint\n\n');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/application.js should pass ESLint\n\n');
  });
});
define('dummy/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  var run = Ember.run;
  function destroyApp(application) {
    run(application, 'destroy');
  }
});
define('dummy/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'dummy/tests/helpers/start-app', 'dummy/tests/helpers/destroy-app'], function (exports, _qunit, _startApp, _destroyApp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function (name) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _startApp.default)();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },
      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return resolve(afterEach).then(function () {
          return (0, _destroyApp.default)(_this.application);
        });
      }
    });
  };

  var resolve = Ember.RSVP.resolve;
});
define('dummy/tests/helpers/resolver', ['exports', 'dummy/resolver', 'dummy/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('dummy/tests/helpers/start-app', ['exports', 'dummy/app', 'dummy/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  var merge = Ember.merge;
  var run = Ember.run;
  function startApp(attrs) {
    var attributes = merge({}, _environment.default.APP);
    attributes = merge(attributes, attrs); // use defaults, but you can override;

    return run(function () {
      var application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('dummy/tests/integration/components/contact-input/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('contact-input', 'Integration | Component | contact input', {
    integration: true
  });

  (0, _emberQunit.test)('class name applied', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "cOkDWufJ",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"contact-input\",null,[[\"fieldName\"],[\"foo\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.ok(this.$('input').hasClass('foo'), 'fieldName applied as class');
  });

  (0, _emberQunit.test)('id and name computed', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "cOkDWufJ",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"contact-input\",null,[[\"fieldName\"],[\"foo\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$('input').attr('id'), 'cd-foo', 'id set');
    assert.equal(this.$('input').attr('name'), 'cd-foo', 'name set');
  });
});
define('dummy/tests/integration/components/contact-select/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('contact-select', 'Integration | Component | contact select', {
    integration: true
  });

  (0, _emberQunit.test)('options rendered correctly', function (assert) {
    this.set('options', [{
      text: 'foo',
      value: 1
    }, {
      text: 'bar',
      value: 2
    }, {
      text: 'baz',
      value: 3
    }]);

    this.render(Ember.HTMLBars.template({
      "id": "zH9JjFmy",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"contact-select\",null,[[\"options\"],[[19,0,[\"options\"]]]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$('option').length, 3, '3 options added');
    assert.equal(this.$('option')[0].value, 1, 'first option value correct');
    assert.equal(this.$('option').first().text().trim(), 'foo', 'first option text correct');
  });
});
define('dummy/tests/integration/components/form-list/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('form-list', 'Integration | Component | form list', {
    integration: true
  });

  (0, _emberQunit.test)('checkboxes', function (assert) {
    this.set('checkboxes', [{
      checked: false,
      fieldName: 'checkbox-1',
      text: 'Option 1'
    }, {
      checked: true,
      fieldName: 'checkbox-2',
      text: 'Option 2'
    }, {
      checked: true,
      fieldName: 'checkbox-3',
      text: 'Option 3'
    }]);

    this.render(Ember.HTMLBars.template({
      "id": "Hp4W0y0+",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"form-list\",null,[[\"options\",\"type\"],[[19,0,[\"checkboxes\"]],\"checkbox\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$('input').length, 3);
    assert.equal(this.$('input:checked').length, 2);
  });

  (0, _emberQunit.test)('radio buttons', function (assert) {
    this.set('radioButtons', [{
      checked: true,
      fieldName: 'radio-1',
      name: 'radio-button',
      text: 'Choice 1'
    }, {
      checked: false,
      fieldName: 'radio-2',
      name: 'radio-button',
      text: 'Choice 2'
    }, {
      checked: false,
      fieldName: 'radio-3',
      name: 'radio-button',
      text: 'Choice 3'
    }]);

    this.render(Ember.HTMLBars.template({
      "id": "BIL7zMew",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"form-list\",null,[[\"groupValue\",\"options\",\"type\"],[\"radio-2\",[19,0,[\"radioButtons\"]],\"radio\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$('input').length, 3);
    assert.equal(this.$('input:checked').length, 1);
  });
});
define('dummy/tests/integration/components/list-item/component-test', ['ember-qunit'], function (_emberQunit) {
  'use strict';

  (0, _emberQunit.moduleForComponent)('list-item', 'Integration | Component | list item', {
    integration: true
  });

  (0, _emberQunit.test)('id computed', function (assert) {
    this.render(Ember.HTMLBars.template({
      "id": "6zTx/PjH",
      "block": "{\"symbols\":[],\"statements\":[[1,[25,\"list-item\",null,[[\"fieldName\",\"type\"],[\"foo\",\"checkbox\"]]],false]],\"hasEval\":false}",
      "meta": {}
    }));

    assert.equal(this.$('input').attr('id'), 'cd-foo', 'id set');
  });
});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit', 'ember-cli-qunit'], function (_resolver, _emberQunit, _emberCliQunit) {
  'use strict';

  (0, _emberQunit.setResolver)(_resolver.default);
  (0, _emberCliQunit.start)();
});
define('dummy/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/module-for-acceptance.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/contact-input/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/contact-input/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/contact-select/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/contact-select/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/form-list/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/form-list/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/list-item/component-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/list-item/component-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });
});
require('dummy/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
