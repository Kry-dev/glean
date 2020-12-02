(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/notie-js", ["exports", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Plugin);
    global.PluginNotieJs = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Plugin2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _Plugin2 = babelHelpers.interopRequireDefault(_Plugin2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var NAME = 'notie';

  var Notie = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(Notie, _Plugin);

    var _super = _createSuper(Notie);

    function Notie() {
      babelHelpers.classCallCheck(this, Notie);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Notie, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        this.$el.data('notieApi', this);
      }
    }, {
      key: "show",
      value: function show() {
        var options = this.options;

        if (options.type !== undefined) {
          switch (options.type) {
            case 'confirm':
              notie.confirm(Object.assign(options, {
                submitCallback: function submitCallback() {
                  if (options.submitCallback && typeof window[options.submitCallback] === 'function') {
                    window[options.submitCallback]();
                  } else {
                    notie.alert({
                      type: 1,
                      text: options.submitMsg,
                      time: 1.5
                    });
                  }
                },
                cancelCallback: function cancelCallback() {
                  if (options.cancelCallback && typeof window[options.cancelCallback] === 'function') {
                    window[options.cancelCallback]();
                  } else {
                    notie.alert({
                      type: 3,
                      text: options.cancelMsg,
                      time: 1.5
                    });
                  }
                }
              }));
              break;

            case 'input':
              notie.input(Object.assign(options, {
                submitCallback: function submitCallback(value) {
                  if (options.submitCallback && typeof window[options.submitCallback] === 'function') {
                    window[options.submitCallback](value);
                  } else {
                    notie.alert({
                      type: 1,
                      text: "you entered: ".concat(value),
                      time: 1.5
                    });
                  }
                },
                cancelCallback: function cancelCallback(value) {
                  if (options.cancelCallback && typeof window[options.cancelCallback] === 'function') {
                    window[options.cancelCallback](value);
                  } else {
                    notie.alert({
                      type: 1,
                      text: "You cancelled with this value: ".concat(value),
                      time: 1.5
                    });
                  }
                }
              }));
              break;

            case 'select':
              notie.select(options);
              break;

            case 'date':
              notie.date(options);
              break;

            default:
              notie.alert(options);
          }
        }
      }
    }], [{
      key: "api",
      value: function api() {
        return 'click|show';
      }
    }]);
    return Notie;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, Notie);

  var _default = Notie;
  _exports.default = _default;
});