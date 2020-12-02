(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/App/Contacts", ["exports", "BaseApp"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("BaseApp"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BaseApp);
    global.AppContacts = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _BaseApp2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.getInstance = getInstance;
  _exports.AppContacts = _exports.default = void 0;
  _BaseApp2 = babelHelpers.interopRequireDefault(_BaseApp2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var AppContacts = /*#__PURE__*/function (_BaseApp) {
    babelHelpers.inherits(AppContacts, _BaseApp);

    var _super = _createSuper(AppContacts);

    function AppContacts() {
      babelHelpers.classCallCheck(this, AppContacts);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(AppContacts, [{
      key: "initialize",
      value: function initialize() {
        babelHelpers.get(babelHelpers.getPrototypeOf(AppContacts.prototype), "initialize", this).call(this);
        this.$actionBtn = $('.site-action');
        this.$actionToggleBtn = this.$actionBtn.find('.site-action-toggle');
        this.$addMainForm = $('#addUserForm').modal({
          show: false
        });
        this.$content = $('#contactsContent'); // states

        this.states = {
          checked: false
        };
      }
    }, {
      key: "process",
      value: function process() {
        babelHelpers.get(babelHelpers.getPrototypeOf(AppContacts.prototype), "process", this).call(this);
        this.setupActionBtn();
        this.bindListChecked();
        this.handlSlidePanelContent();
      }
    }, {
      key: "listChecked",
      value: function listChecked(checked) {
        var api = this.$actionBtn.data('actionBtn');

        if (checked) {
          api.show();
        } else {
          api.hide();
        }

        this.states.checked = checked;
      }
    }, {
      key: "setupActionBtn",
      value: function setupActionBtn() {
        var _this = this;

        this.$actionToggleBtn.on('click', function (e) {
          if (!_this.states.checked) {
            _this.$addMainForm.modal('show');

            e.stopPropagation();
          }
        });
      }
    }, {
      key: "bindListChecked",
      value: function bindListChecked() {
        var _this2 = this;

        this.$content.on('asSelectable::change', function (e, api, checked) {
          _this2.listChecked(checked);
        });
      }
    }, {
      key: "handlSlidePanelContent",
      value: function handlSlidePanelContent() {
        var _this3 = this;

        $(document).on('click', '[data-toggle=edit]', function () {
          var $button = $(this);
          var $panel = $button.parents('.slidePanel');
          var $form = $panel.find('.user-info');
          $button.toggleClass('active');
          $form.toggleClass('active');
        });
        $(document).on('change', '.user-info .form-group', function (e) {
          var $input = $(_this3).find('input');
          var $span = $(_this3).siblings('span');
          $span.html($input.val());
        });
      }
    }]);
    return AppContacts;
  }(_BaseApp2.default);

  _exports.AppContacts = AppContacts;
  var instance = null;

  function getInstance() {
    if (!instance) {
      instance = new AppContacts();
    }

    return instance;
  }

  function run() {
    var app = getInstance();
    app.run();
  }

  var _default = AppContacts;
  _exports.default = _default;
});