"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread3 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactInstantsearchCore = require("react-instantsearch-core");

var _utils = require("../core/utils");

var cx = (0, _utils.createClassNames)('SearchBox');

var defaultLoadingIndicator = _react.default.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 38 38",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "#444",
  className: cx('loadingIcon')
}, _react.default.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, _react.default.createElement("g", {
  transform: "translate(1 1)",
  strokeWidth: "2"
}, _react.default.createElement("circle", {
  strokeOpacity: ".5",
  cx: "18",
  cy: "18",
  r: "18"
}), _react.default.createElement("path", {
  d: "M36 18c0-9.94-8.06-18-18-18"
}, _react.default.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "1s",
  repeatCount: "indefinite"
})))));

var defaultReset = _react.default.createElement("svg", {
  className: cx('resetIcon'),
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  width: "10",
  height: "10"
}, _react.default.createElement("path", {
  d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
}));

var defaultSubmit = _react.default.createElement("svg", {
  className: cx('submitIcon'),
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10",
  viewBox: "0 0 40 40"
}, _react.default.createElement("path", {
  d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
}));

var SearchBox =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(SearchBox, _Component);

  function SearchBox(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SearchBox);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SearchBox).call(this));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "getQuery", function () {
      return _this.props.searchAsYouType ? _this.props.currentRefinement : _this.state.query;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onInputMount", function (input) {
      _this.input = input;
      if (!_this.props.inputRef) return;

      if (typeof _this.props.inputRef === 'function') {
        _this.props.inputRef(input);
      } else {
        _this.props.inputRef.current = input;
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onKeyDown", function (e) {
      if (!_this.props.focusShortcuts) {
        return;
      }

      var shortcuts = _this.props.focusShortcuts.map(function (key) {
        return typeof key === 'string' ? key.toUpperCase().charCodeAt(0) : key;
      });

      var elt = e.target || e.srcElement;
      var tagName = elt.tagName;

      if (elt.isContentEditable || tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA') {
        // already in an input
        return;
      }

      var which = e.which || e.keyCode;

      if (shortcuts.indexOf(which) === -1) {
        // not the right shortcut
        return;
      }

      _this.input.focus();

      e.stopPropagation();
      e.preventDefault();
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onSubmit", function (e) {
      e.preventDefault();
      e.stopPropagation();

      _this.input.blur();

      var _this$props = _this.props,
          refine = _this$props.refine,
          searchAsYouType = _this$props.searchAsYouType;

      if (!searchAsYouType) {
        refine(_this.getQuery());
      }

      return false;
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (event) {
      var _this$props2 = _this.props,
          searchAsYouType = _this$props2.searchAsYouType,
          refine = _this$props2.refine,
          onChange = _this$props2.onChange;
      var value = event.target.value;

      if (searchAsYouType) {
        refine(value);
      } else {
        _this.setState({
          query: value
        });
      }

      if (onChange) {
        onChange(event);
      }
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onReset", function (event) {
      var _this$props3 = _this.props,
          searchAsYouType = _this$props3.searchAsYouType,
          refine = _this$props3.refine,
          onReset = _this$props3.onReset;
      refine('');

      _this.input.focus();

      if (!searchAsYouType) {
        _this.setState({
          query: ''
        });
      }

      if (onReset) {
        onReset(event);
      }
    });
    _this.state = {
      query: props.searchAsYouType ? null : props.currentRefinement
    };
    return _this;
  }

  (0, _createClass2.default)(SearchBox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.onKeyDown);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!this.props.searchAsYouType && prevProps.currentRefinement !== this.props.currentRefinement) {
        this.setState({
          query: this.props.currentRefinement
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          inputId = _this$props4.inputId,
          translate = _this$props4.translate,
          autoFocus = _this$props4.autoFocus,
          loadingIndicator = _this$props4.loadingIndicator,
          submit = _this$props4.submit,
          reset = _this$props4.reset;
      var query = this.getQuery();
      var searchInputEvents = Object.keys(this.props).reduce(function (props, prop) {
        if (['onsubmit', 'onreset', 'onchange'].indexOf(prop.toLowerCase()) === -1 && prop.indexOf('on') === 0) {
          return (0, _objectSpread3.default)({}, props, (0, _defineProperty2.default)({}, prop, _this2.props[prop]));
        }

        return props;
      }, {});
      var isSearchStalled = this.props.showLoadingIndicator && this.props.isSearchStalled;
      /* eslint-disable max-len */

      return _react.default.createElement("div", {
        className: (0, _classnames.default)(cx(''), className)
      }, _react.default.createElement("form", {
        noValidate: true,
        onSubmit: this.props.onSubmit ? this.props.onSubmit : this.onSubmit,
        onReset: this.onReset,
        className: cx('form', isSearchStalled && 'form--stalledSearch'),
        action: "",
        role: "search"
      }, _react.default.createElement("input", (0, _extends2.default)({
        ref: this.onInputMount,
        id: inputId,
        type: "search",
        placeholder: translate('placeholder'),
        autoFocus: autoFocus,
        autoComplete: "off",
        autoCorrect: "off",
        autoCapitalize: "off",
        spellCheck: "false",
        required: true,
        maxLength: "512",
        value: query,
        onChange: this.onChange
      }, searchInputEvents, {
        className: cx('input')
      })), _react.default.createElement("button", {
        type: "submit",
        title: translate('submitTitle'),
        className: cx('submit')
      }, submit), _react.default.createElement("button", {
        type: "reset",
        title: translate('resetTitle'),
        className: cx('reset'),
        hidden: !query || isSearchStalled
      }, reset), this.props.showLoadingIndicator && _react.default.createElement("span", {
        hidden: !isSearchStalled,
        className: cx('loadingIndicator')
      }, loadingIndicator)));
      /* eslint-enable */
    }
  }]);
  return SearchBox;
}(_react.Component);

(0, _defineProperty2.default)(SearchBox, "propTypes", {
  currentRefinement: _propTypes.default.string,
  className: _propTypes.default.string,
  refine: _propTypes.default.func.isRequired,
  translate: _propTypes.default.func.isRequired,
  loadingIndicator: _propTypes.default.node,
  reset: _propTypes.default.node,
  submit: _propTypes.default.node,
  focusShortcuts: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number])),
  autoFocus: _propTypes.default.bool,
  searchAsYouType: _propTypes.default.bool,
  onSubmit: _propTypes.default.func,
  onReset: _propTypes.default.func,
  onChange: _propTypes.default.func,
  isSearchStalled: _propTypes.default.bool,
  showLoadingIndicator: _propTypes.default.bool,
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.exact({
    current: _propTypes.default.object
  })]),
  inputId: _propTypes.default.string
});
(0, _defineProperty2.default)(SearchBox, "defaultProps", {
  currentRefinement: '',
  className: '',
  focusShortcuts: ['s', '/'],
  autoFocus: false,
  searchAsYouType: true,
  showLoadingIndicator: false,
  isSearchStalled: false,
  loadingIndicator: defaultLoadingIndicator,
  reset: defaultReset,
  submit: defaultSubmit
});

var _default = (0, _reactInstantsearchCore.translatable)({
  resetTitle: 'Clear the search query.',
  submitTitle: 'Submit your search query.',
  placeholder: 'Search here…'
})(SearchBox);

exports.default = _default;