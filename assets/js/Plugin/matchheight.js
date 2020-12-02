(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/matchheight", ["exports", "jquery", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin);
    global.PluginMatchheight = mod.exports;
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

  var NAME = 'matchHeight';

  var MatchHeight = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(MatchHeight, _Plugin);

    var _super = _createSuper(MatchHeight);

    function MatchHeight() {
      babelHelpers.classCallCheck(this, MatchHeight);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(MatchHeight, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        if (typeof _jquery.default.fn.matchHeight === 'undefined') {
          return;
        }

        var $el = this.$el;
        var matchSelector = $el.data('matchSelector');

        if (matchSelector) {
          $el.find(matchSelector).matchHeight(this.options);
        } else {
          $el.children().matchHeight(this.options);
        }
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {};
      }
    }]);
    return MatchHeight;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, MatchHeight);

  var _default = MatchHeight;
  _exports.default = _default;
});