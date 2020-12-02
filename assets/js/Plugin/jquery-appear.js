(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/jquery-appear", ["exports", "jquery", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin);
    global.PluginJqueryAppear = mod.exports;
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

  var NAME = 'appear';

  var Appear = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(Appear, _Plugin);

    var _super = _createSuper(Appear);

    function Appear() {
      babelHelpers.classCallCheck(this, Appear);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Appear, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "bind",
      value: function bind() {
        var _this = this;

        this.$el.on('appear', function () {
          if (_this.$el.hasClass('appear-no-repeat')) {
            return;
          }

          _this.$el.removeClass('invisible').addClass("animation-".concat(_this.options.animate));

          if (_this.$el.data('repeat') === false) {
            _this.$el.addClass('appear-no-repeat');
          }
        });
        (0, _jquery.default)(document).on('disappear', function () {
          if (_this.$el.hasClass('appear-no-repeat')) {
            return;
          }

          _this.$el.addClass('invisible').removeClass("animation-".concat(_this.options.animate));
        });
      }
    }, {
      key: "render",
      value: function render() {
        if (!_jquery.default.fn.appear) {
          return;
        }

        this.$el.appear(this.options);
        this.$el.not(':appeared').addClass('invisible');
        this.bind();
      }
    }]);
    return Appear;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, Appear);

  var _default = Appear;
  _exports.default = _default;
});