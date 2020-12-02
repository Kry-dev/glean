(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Base", ["exports", "jquery", "Component", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Component"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Component, global.Plugin);
    global.Base = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _jquery, _Component2, _Plugin) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _jquery = babelHelpers.interopRequireDefault(_jquery);
  _Component2 = babelHelpers.interopRequireDefault(_Component2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var Base = /*#__PURE__*/function (_Component) {
    babelHelpers.inherits(Base, _Component);

    var _super = _createSuper(Base);

    function Base() {
      babelHelpers.classCallCheck(this, Base);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Base, [{
      key: "initializePlugins",
      value: function initializePlugins() {
        var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        (0, _jquery.default)('[data-plugin]', context || this.$el).each(function () {
          var $this = (0, _jquery.default)(this);
          var name = $this.data('plugin');
          var plugin = (0, _Plugin.pluginFactory)(name, $this, $this.data());

          if (plugin) {
            plugin.initialize();
          }
        });
      }
    }, {
      key: "initializePluginAPIs",
      value: function initializePluginAPIs() {
        var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document;
        var apis = (0, _Plugin.getPluginAPI)();

        for (var name in apis) {
          (0, _Plugin.getPluginAPI)(name)("[data-plugin=".concat(name, "]"), context);
        }
      }
    }]);
    return Base;
  }(_Component2.default);

  var _default = Base;
  _exports.default = _default;
});