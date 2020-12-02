(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/bootbox", ["exports", "jquery", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin);
    global.PluginBootbox = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _jquery, _Plugin2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _jquery = babelHelpers.interopRequireDefault(_jquery);
  _Plugin2 = babelHelpers.interopRequireDefault(_Plugin2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var NAME = 'bootbox';

  var Bootbox = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(Bootbox, _Plugin);

    var _super = _createSuper(Bootbox);

    function Bootbox() {
      babelHelpers.classCallCheck(this, Bootbox);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Bootbox, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        this.$el.data('bootboxWrapApi', this);
      }
    }, {
      key: "show",
      value: function show() {
        if (typeof bootbox === 'undefined') {
          return;
        }

        var options = this.options;

        if (options.classname) {
          options.className = options.classname;
        }

        if (options.className) {
          options.className += ' modal-simple';
        }

        if (typeof options.callback === 'string' && _jquery.default.isFunction(window[options.callback])) {
          options.callback = window[options.callback];
        }

        if (options.type) {
          switch (options.type) {
            case 'alert':
              bootbox.alert(options);
              break;

            case 'confirm':
              bootbox.confirm(options);
              break;

            case 'prompt':
              bootbox.prompt(options);
              break;

            default:
              bootbox.dialog(options);
          }
        } else {
          bootbox.dialog(options);
        }
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {
          message: '',
          className: 'modal-simple'
        };
      }
    }, {
      key: "api",
      value: function api() {
        return 'click|show';
      }
    }]);
    return Bootbox;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, Bootbox);

  var _default = Bootbox;
  _exports.default = _default;
});