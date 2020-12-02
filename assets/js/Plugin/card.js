(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/card", ["exports", "jquery", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin);
    global.PluginCard = mod.exports;
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

  var NAME = 'card';

  var Card = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(Card, _Plugin);

    var _super = _createSuper(Card);

    function Card() {
      babelHelpers.classCallCheck(this, Card);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Card, [{
      key: "getName",
      value: function getName() {}
    }, {
      key: "render",
      value: function render() {
        if (!_jquery.default.fn.card) {
          return;
        }

        var $el = this.$el;
        var options = this.options;

        if (options.target) {
          options.container = (0, _jquery.default)(options.target);
        }

        $el.card(options);
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {};
      }
    }]);
    return Card;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, Card);

  var _default = Card;
  _exports.default = _default;
});