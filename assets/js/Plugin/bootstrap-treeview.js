(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/bootstrap-treeview", ["exports", "jquery", "Plugin", "Config"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"), require("Config"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin, global.Config);
    global.PluginBootstrapTreeview = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _jquery, _Plugin2, _Config) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _jquery = babelHelpers.interopRequireDefault(_jquery);
  _Plugin2 = babelHelpers.interopRequireDefault(_Plugin2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var NAME = 'treeview';

  var Treeview = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(Treeview, _Plugin);

    var _super = _createSuper(Treeview);

    function Treeview() {
      babelHelpers.classCallCheck(this, Treeview);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Treeview, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        if (!_jquery.default.fn.treeview) {
          return;
        }

        var $el = this.$el;
        var options = this.options;

        if (typeof options.source === 'string' && _jquery.default.isFunction(window[options.source])) {
          options.data = window[options.source]();
          delete options.source;
        } else if (_jquery.default.isFunction(options.souce)) {
          options.data = options.source();
          delete options.source;
        }

        $el.treeview(options);
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {
          injectStyle: false,
          expandIcon: 'icon wb-plus',
          collapseIcon: 'icon wb-minus',
          emptyIcon: 'icon',
          nodeIcon: 'icon wb-folder',
          showBorder: false,
          // color: undefined, // "#000000",
          // backColor: undefined, // "#FFFFFF",
          borderColor: (0, _Config.colors)('blue-grey', 200),
          onhoverColor: (0, _Config.colors)('blue-grey', 100),
          selectedColor: '#ffffff',
          selectedBackColor: (0, _Config.colors)('primary', 600),
          searchResultColor: (0, _Config.colors)('primary', 600),
          searchResultBackColor: '#ffffff'
        };
      }
    }]);
    return Treeview;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, Treeview);

  var _default = Treeview;
  _exports.default = _default;
});