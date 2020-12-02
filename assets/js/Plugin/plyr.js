(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/plyr", ["exports", "jquery", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("jquery"), require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.jQuery, global.Plugin);
    global.PluginPlyr = mod.exports;
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

  var NAME = 'plyr';
  (0, _jquery.default)(document).ready(function () {
    var a = new XMLHttpRequest();
    var d = document;
    var u = 'https://cdn.plyr.io/1.1.5/sprite.svg';
    var b = d.body; // Check for CORS support

    if ('withCredentials' in a) {
      a.open('GET', u, true);
      a.send();

      a.onload = function () {
        var c = d.createElement('div');
        c.style.display = 'none';
        c.innerHTML = a.responseText;
        b.insertBefore(c, b.childNodes[0]);
      };
    }
  });

  var Plyr = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(Plyr, _Plugin);

    var _super = _createSuper(Plyr);

    function Plyr() {
      babelHelpers.classCallCheck(this, Plyr);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(Plyr, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        if (typeof plyr === 'undefined') {
          return;
        }

        plyr.setup(this.$el[0], this.options);
      }
    }], [{
      key: "getDefaults",
      value: function getDefaults() {
        return {};
      }
    }]);
    return Plyr;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, Plyr);

  var _default = Plyr;
  _exports.default = _default;
});