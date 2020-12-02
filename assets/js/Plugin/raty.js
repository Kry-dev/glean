(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/raty", ["exports", "jquery", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin);
    global.PluginRaty = mod.exports;
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

  var NAME = 'rating';

  var Rating = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(Rating, _Plugin);

    var _super = _createSuper(Rating);

    function Rating() {
      babelHelpers.classCallCheck(this, Rating);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Rating, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        if (!_jquery.default.fn.raty) {
          return;
        }

        var $el = this.$el;

        if (this.options.hints) {
          this.options.hints = this.options.hints.split(',');
        }

        $el.raty(this.options);
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {
          targetKeep: true,
          icon: 'font',
          starType: 'i',
          starOff: 'icon wb-star',
          starOn: 'icon wb-star orange-600',
          cancelOff: 'icon wb-minus-circle',
          cancelOn: 'icon wb-minus-circle orange-600',
          starHalf: 'icon wb-star-half orange-500'
        };
      }
    }]);
    return Rating;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, Rating);

  var _default = Rating;
  _exports.default = _default;
});