(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/animate-list", ["exports", "jquery", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin);
    global.PluginAnimateList = mod.exports;
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

  var NAME = 'animateList';

  var AnimateList = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(AnimateList, _Plugin);

    var _super = _createSuper(AnimateList);

    function AnimateList() {
      babelHelpers.classCallCheck(this, AnimateList);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(AnimateList, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        var $el = this.$el;

        var animatedBox = /*#__PURE__*/function () {
          function animatedBox($el, opts) {
            babelHelpers.classCallCheck(this, animatedBox);
            this.options = opts;
            this.$children = $el.find(opts.child);
            this.$children.addClass("animation-".concat(opts.animate));
            this.$children.css('animation-fill-mode', opts.fill);
            this.$children.css('animation-duration', "".concat(opts.duration, "ms"));
            var delay = 0;
            var self = this;
            this.$children.each(function () {
              (0, _jquery.default)(this).css('animation-delay', "".concat(delay, "ms"));
              delay += self.options.delay;
            });
          }

          babelHelpers.createClass(animatedBox, [{
            key: "run",
            value: function run(type) {
              var _this = this;

              this.$children.removeClass("animation-".concat(this.options.animate));

              if (typeof type !== 'undefined') {
                this.options.animate = type;
              }

              setTimeout(function () {
                _this.$children.addClass("animation-".concat(_this.options.animate));
              }, 0);
            }
          }]);
          return animatedBox;
        }();

        $el.data('animateList', new animatedBox($el, this.options));
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {
          child: '.panel',
          duration: 250,
          delay: 50,
          animate: 'scale-up',
          fill: 'backwards'
        };
      }
    }]);
    return AnimateList;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, AnimateList);

  var _default = AnimateList;
  _exports.default = _default;
});