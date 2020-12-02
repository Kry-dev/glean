(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/ladda", ["exports", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Plugin);
    global.PluginLadda = mod.exports;
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

  var NAME = 'ladda';

  var LaddaPlugin = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(LaddaPlugin, _Plugin);

    var _super = _createSuper(LaddaPlugin);

    function LaddaPlugin() {
      babelHelpers.classCallCheck(this, LaddaPlugin);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(LaddaPlugin, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        if (typeof Ladda === 'undefined') {
          return;
        }

        if (this.options.type === 'progress') {
          this.options.callback = function (instance) {
            var progress = 0;
            var interval = setInterval(function () {
              progress = Math.min(progress + Math.random() * 0.1, 1);
              instance.setProgress(progress);

              if (progress === 1) {
                instance.stop();
                clearInterval(interval);
              }
            }, 200);
          };
        }

        Ladda.bind(this.$el[0], this.options);
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {
          type: 'normal',
          timeout: 2000
        };
      }
    }]);
    return LaddaPlugin;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, LaddaPlugin);

  var _default = LaddaPlugin;
  _exports.default = _default;
});