(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/switchery", ["exports", "Plugin", "Config"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("Plugin"), require("Config"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Plugin, global.Config);
    global.PluginSwitchery = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Plugin2, _Config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _Plugin2 = babelHelpers.interopRequireDefault(_Plugin2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var NAME = 'switchery';

  var SwitcheryPlugin = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(SwitcheryPlugin, _Plugin);

    var _super = _createSuper(SwitcheryPlugin);

    function SwitcheryPlugin() {
      babelHelpers.classCallCheck(this, SwitcheryPlugin);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(SwitcheryPlugin, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        if (typeof Switchery === 'undefined') {
          return;
        }

        new Switchery(this.$el[0], this.options);
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {
          color: (0, _Config.colors)('primary', 600)
        };
      }
    }]);
    return SwitcheryPlugin;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, SwitcheryPlugin);

  var _default = SwitcheryPlugin;
  _exports.default = _default;
});