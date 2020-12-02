(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/tabs", ["exports", "jquery", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin);
    global.PluginTabs = mod.exports;
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

  var NAME = 'tabs';

  var Tabs = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(Tabs, _Plugin);

    var _super = _createSuper(Tabs);

    function Tabs() {
      babelHelpers.classCallCheck(this, Tabs);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Tabs, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        if (this.$el.find('.nav-tabs-horizontal') && _jquery.default.fn.responsiveHorizontalTabs) {
          this.type = 'horizontal';
          this.$el.responsiveHorizontalTabs();
        } else if (this.$el.find('.nav-tabs-vertical')) {
          this.type = 'vertical';
          this.$el.children().matchHeight();
        }
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {};
      }
    }]);
    return Tabs;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, Tabs);

  var _default = Tabs;
  _exports.default = _default;
});