(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("/Plugin/ace-editor", ["exports", "Plugin"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("Plugin"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Plugin);
    global.PluginAceEditor = mod.exports;
  }
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function (_exports, _Plugin2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _Plugin2 = babelHelpers.interopRequireDefault(_Plugin2);

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = babelHelpers.getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = babelHelpers.getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return babelHelpers.possibleConstructorReturn(this, result); }; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

  var NAME = 'ace';

  var AceEditor = /*#__PURE__*/function (_Plugin) {
    babelHelpers.inherits(AceEditor, _Plugin);

    var _super = _createSuper(AceEditor);

    function AceEditor() {
      babelHelpers.classCallCheck(this, AceEditor);
      return _super.apply(this, arguments);
    }

    babelHelpers.createClass(AceEditor, [{
      key: "getName",
      value: function getName() {
        return NAME;
      }
    }, {
      key: "render",
      value: function render() {
        if (typeof ace === 'undefined') {
          return;
        } // ace.config.set("themePath", "../theme");


        ace.config.loadModule('ace/ext/language_tools');
        var $el = this.$el;
        var id = $el.attr('id');
        var editor = ace.edit(id);
        editor.container.style.opacity = '';

        if (this.options.mode) {
          editor.session.setMode("ace/mode/".concat(this.options.mode));
        }

        if (this.options.theme) {
          editor.setTheme("ace/theme/".concat(this.options.theme));
        }

        editor.setOption('maxLines', 40);
        editor.setAutoScrollEditorIntoView(true);
        ace.config.loadModule('ace/ext/language_tools', function () {
          editor.setOptions({
            enableSnippets: true,
            enableBasicAutocompletion: true
          });
        });
      }
    }]);
    return AceEditor;
  }(_Plugin2.default);

  _Plugin2.default.register(NAME, AceEditor);

  var _default = AceEditor;
  _exports.default = _default;
});