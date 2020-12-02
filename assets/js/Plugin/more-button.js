(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/more-button", ["exports", "jquery", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin);
    global.PluginMoreButton = mod.exports;
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

  var NAME = 'moreButton';

  var MoreButton = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(MoreButton, _Plugin);

    var _super = _createSuper(MoreButton);

    function MoreButton() {
      babelHelpers.classCallCheck(this, MoreButton);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(MoreButton, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        this.$target = (0, _jquery.default)(this.options.more);
        this.$el.data('moreButtonApi', this);
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this.$target.toggle();
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {
          more: ''
        };
      }
    }, {
      key: "api",
      value: function api() {
        return 'click|toggle';
      }
    }]);
    return MoreButton;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, MoreButton);

  var _default = MoreButton;
  _exports.default = _default;
});