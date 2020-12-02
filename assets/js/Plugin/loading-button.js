(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/loading-button", ["exports", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Plugin);
    global.PluginLoadingButton = mod.exports;
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

  var NAME = 'loadingButton';

  var LoadingButton = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(LoadingButton, _Plugin);

    var _super = _createSuper(LoadingButton);

    function LoadingButton() {
      babelHelpers.classCallCheck(this, LoadingButton);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(LoadingButton, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        this.text = this.$el.text();
        this.$el.data('loadingButtonApi', this);
      }
    }, {
      key: "loading",
      value: function loading() {
        var $el = this.$el;
        var i = this.options.time;
        var loadingText = this.options.loadingText;
        var opacity = this.options.opacity;
        var text = this.text;
        $el.text("".concat(loadingText, "(").concat(i, ")")).css('opacity', opacity);
        var timeout = setInterval(function () {
          $el.text("".concat(loadingText, "(").concat(--i, ")"));

          if (i === 0) {
            clearInterval(timeout);
            $el.text(text).css('opacity', '1');
          }
        }, 1000);
      }
    }], [{
      key: "api",
      value: function api() {
        return 'click|loading';
      }
    }, {
      key: "getDefaults",
      value: function getDefaults() {
        return {
          loadingText: 'Loading',
          time: 20,
          opacity: '0.6'
        };
      }
    }]);
    return LoadingButton;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, LoadingButton);

  var _default = LoadingButton;
  _exports.default = _default;
});