(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/BaseApp", ["exports", "jquery", "Plugin", "Site"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"), require("Site"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin, global.Site);
    global.BaseApp = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _jquery, _Plugin, _Site2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _jquery = babelHelpers.interopRequireDefault(_jquery);
  _Site2 = babelHelpers.interopRequireDefault(_Site2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var BaseApp = /*#__PURE__*/function (_Site) {
    babelHelpers.inherits(BaseApp, _Site);

    var _super = _createSuper(BaseApp);

    function BaseApp() {
      babelHelpers.classCallCheck(this, BaseApp);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(BaseApp, [{
      key: "initialize",
      value: function initialize() {
        babelHelpers.get(babelHelpers.getPrototypeOf(BaseApp.prototype), "initialize", this).call(this);
        this.handlSlidePanelPlugin();
      }
    }, {
      key: "process",
      value: function process() {
        babelHelpers.get(babelHelpers.getPrototypeOf(BaseApp.prototype), "process", this).call(this);
        this.bindSlidePanelPlugin();
      }
    }, {
      key: "handlSlidePanelPlugin",
      value: function handlSlidePanelPlugin() {
        var self = this;
        this.slidepanelOptions = _jquery.default.extend({}, (0, _Plugin.getDefaults)('slidePanel'), {
          template: function template(options) {
            return "<div class=\"".concat(options.classes.base, " ").concat(options.classes.base, "-").concat(options.direction, "\">\n                  <div class=\"").concat(options.classes.base, "-scrollable\">\n                    <div><div class=\"").concat(options.classes.content, "\"></div></div>\n                  </div>\n                  <div class=\"").concat(options.classes.base, "-handler\"></div>\n                </div>");
          },
          afterLoad: function afterLoad() {
            this.$panel.find(".".concat(this.options.classes.base, "-scrollable")).asScrollable({
              namespace: 'scrollable',
              contentSelector: '>',
              containerSelector: '>'
            });
            self.initializePlugins(this.$panel);
          },
          afterShow: function afterShow() {
            var _this = this;

            (0, _jquery.default)(document).on('click.slidePanelShow', function (e) {
              if ((0, _jquery.default)(e.target).closest('.slidePanel').length === 0 && (0, _jquery.default)(e.target).closest('html').length === 1) {
                _this.hide();
              }
            });
          },
          afterHide: function afterHide() {
            (0, _jquery.default)(document).off('click.slidePanelShow');
            (0, _jquery.default)(document).off('click.slidePanelDatepicker');
          }
        }, this.getSlidePanelOptions());
      }
    }, {
      key: "bindSlidePanelPlugin",
      value: function bindSlidePanelPlugin() {
        var self = this;
        (0, _jquery.default)(document).on('click', '[data-toggle="slidePanel"]', function (e) {
          self.openSlidePanel((0, _jquery.default)(this).data('url'));
          e.stopPropagation();
        });
      }
    }, {
      key: "getSlidePanelOptions",
      value: function getSlidePanelOptions() {
        return {};
      }
    }, {
      key: "openSlidePanel",
      value: function openSlidePanel() {
        var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        _jquery.default.slidePanel.show({
          url: url,
          settings: {
            cache: false
          }
        }, this.slidepanelOptions);
      }
    }]);
    return BaseApp;
  }(_Site2.default);

  var _default = BaseApp;
  _exports.default = _default;
});