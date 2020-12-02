(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/App/Forum", ["exports", "BaseApp"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("BaseApp"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BaseApp);
    global.AppForum = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _BaseApp2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.getInstance = getInstance;
  _exports.AppForum = _exports.default = void 0;
  _BaseApp2 = babelHelpers.interopRequireDefault(_BaseApp2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var AppForum = /*#__PURE__*/function (_BaseApp) {
    babelHelpers.inherits(AppForum, _BaseApp);

    var _super = _createSuper(AppForum);

    function AppForum() {
      babelHelpers.classCallCheck(this, AppForum);
      return _super.apply(this, arguments);
    }

    return AppForum;
  }(_BaseApp2.default);

  _exports.AppForum = AppForum;
  var instance = null;

  function getInstance() {
    if (!instance) {
      instance = new AppForum();
    }

    return instance;
  }

  function run() {
    var app = getInstance();
    app.run();
  }

  var _default = AppForum;
  _exports.default = _default;
});