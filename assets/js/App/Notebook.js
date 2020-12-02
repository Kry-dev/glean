(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/App/Notebook", ["exports", "Site"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("Site"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Site);
    global.AppNotebook = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Site2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.run = run;
  _exports.getInstance = getInstance;
  _exports.AppNotebook = _exports.default = void 0;
  _Site2 = babelHelpers.interopRequireDefault(_Site2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var AppNotebook = /*#__PURE__*/function (_Site) {
    babelHelpers.inherits(AppNotebook, _Site);

    var _super = _createSuper(AppNotebook);

    function AppNotebook() {
      babelHelpers.classCallCheck(this, AppNotebook);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(AppNotebook, [{
      key: "initialize",
      value: function initialize() {
        babelHelpers.get(babelHelpers.getPrototypeOf(AppNotebook.prototype), "initialize", this).call(this);
        this.$listItem = $('.list-group-item');
        this.$actionBtn = $('.site-action');
        this.$toggle = this.$actionBtn.find('.site-action-toggle');
        this.$newNote = $('#addNewNote');
        this.$mdEdit = $('#mdEdit');
        this.window = $(window); // states

        this.states = {
          listItemActive: false
        };
      }
    }, {
      key: "process",
      value: function process() {
        babelHelpers.get(babelHelpers.getPrototypeOf(AppNotebook.prototype), "process", this).call(this);
        this.handleResize();
        this.steupListItem();
        this.steupActionBtn();
      }
    }, {
      key: "initEditer",
      value: function initEditer() {
        this.$mdEdit.markdown({
          autofocus: false,
          savable: false
        });
      }
    }, {
      key: "listItemActive",
      value: function listItemActive(active) {
        var api = this.$actionBtn.data('actionBtn');

        if (active) {
          api.show();
        } else {
          this.$listItem.removeClass('active');
        }

        this.states.listItemActive = active;
      }
    }, {
      key: "steupListItem",
      value: function steupListItem() {
        var self = this;
        this.$listItem.on('click', function () {
          $(this).siblings().removeClass('active');
          $(this).addClass('active');
          self.listItemActive(true);
        });
      }
    }, {
      key: "steupActionBtn",
      value: function steupActionBtn() {
        var _this = this;

        this.$toggle.on('click', function (e) {
          if (_this.states.listItemActive) {
            _this.listItemActive(false);
          } else {
            _this.$newNote.modal('show');

            e.stopPropagation();
          }
        });
      }
    }, {
      key: "handleResize",
      value: function handleResize() {
        this.window.on('resize', this.initEditer());
      }
    }]);
    return AppNotebook;
  }(_Site2.default);

  _exports.AppNotebook = AppNotebook;
  var instance = null;

  function getInstance() {
    if (!instance) {
      instance = new AppNotebook();
    }

    return instance;
  }

  function run() {
    var app = getInstance();
    app.run();
  }

  var _default = AppNotebook;
  _exports.default = _default;
});