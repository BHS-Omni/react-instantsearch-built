import _extends from "@babel/runtime/helpers/esm/extends";
import _objectSpread from "@babel/runtime/helpers/esm/objectSpread";
import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translatable } from 'react-instantsearch-core';
import { createClassNames } from '../core/utils';
var cx = createClassNames('SearchBox');
var defaultLoadingIndicator = React.createElement("svg", {
  width: "18",
  height: "18",
  viewBox: "0 0 38 38",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "#444",
  className: cx('loadingIcon')
}, React.createElement("g", {
  fill: "none",
  fillRule: "evenodd"
}, React.createElement("g", {
  transform: "translate(1 1)",
  strokeWidth: "2"
}, React.createElement("circle", {
  strokeOpacity: ".5",
  cx: "18",
  cy: "18",
  r: "18"
}), React.createElement("path", {
  d: "M36 18c0-9.94-8.06-18-18-18"
}, React.createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 18 18",
  to: "360 18 18",
  dur: "1s",
  repeatCount: "indefinite"
})))));
var defaultReset = React.createElement("svg", {
  className: cx('resetIcon'),
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 20 20",
  width: "10",
  height: "10"
}, React.createElement("path", {
  d: "M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z"
}));
var defaultSubmit = React.createElement("svg", {
  className: cx('submitIcon'),
  xmlns: "http://www.w3.org/2000/svg",
  width: "10",
  height: "10",
  viewBox: "0 0 40 40"
}, React.createElement("path", {
  d: "M26.804 29.01c-2.832 2.34-6.465 3.746-10.426 3.746C7.333 32.756 0 25.424 0 16.378 0 7.333 7.333 0 16.378 0c9.046 0 16.378 7.333 16.378 16.378 0 3.96-1.406 7.594-3.746 10.426l10.534 10.534c.607.607.61 1.59-.004 2.202-.61.61-1.597.61-2.202.004L26.804 29.01zm-10.426.627c7.323 0 13.26-5.936 13.26-13.26 0-7.32-5.937-13.257-13.26-13.257C9.056 3.12 3.12 9.056 3.12 16.378c0 7.323 5.936 13.26 13.258 13.26z"
}));

var SearchBox =
/*#__PURE__*/
function (_Component) {
  _inherits(SearchBox, _Component);

  function SearchBox(props) {
    var _this;

    _classCallCheck(this, SearchBox);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SearchBox).call(this));

    _defineProperty(_assertThisInitialized(_this), "getQuery", function () {
      return _this.props.searchAsYouType ? _this.props.currentRefinement : _this.state.query;
    });

    _defineProperty(_assertThisInitialized(_this), "onInputMount", function (input) {
      _this.input = input;
      if (!_this.props.inputRef) return;

      if (typeof _this.props.inputRef === 'function') {
        _this.props.inputRef(input);
      } else {
        _this.props.inputRef.current = input;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "onSubmit", function (e) {
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

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
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

    _defineProperty(_assertThisInitialized(_this), "onReset", function (event) {
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

  _createClass(SearchBox, [{
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
          return _objectSpread({}, props, _defineProperty({}, prop, _this2.props[prop]));
        }

        return props;
      }, {});
      var isSearchStalled = this.props.showLoadingIndicator && this.props.isSearchStalled;
      /* eslint-disable max-len */

      return React.createElement("div", {
        className: classNames(cx(''), className)
      }, React.createElement("form", {
        noValidate: true,
        onSubmit: this.props.onSubmit ? this.props.onSubmit : this.onSubmit,
        onReset: this.onReset,
        className: cx('form', isSearchStalled && 'form--stalledSearch'),
        action: "",
        role: "search"
      }, React.createElement("input", _extends({
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
      })), React.createElement("button", {
        type: "submit",
        title: translate('submitTitle'),
        className: cx('submit')
      }, submit), React.createElement("button", {
        type: "reset",
        title: translate('resetTitle'),
        className: cx('reset'),
        hidden: !query || isSearchStalled
      }, reset), this.props.showLoadingIndicator && React.createElement("span", {
        hidden: !isSearchStalled,
        className: cx('loadingIndicator')
      }, loadingIndicator)));
      /* eslint-enable */
    }
  }]);

  return SearchBox;
}(Component);

_defineProperty(SearchBox, "propTypes", {
  currentRefinement: PropTypes.string,
  className: PropTypes.string,
  refine: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  loadingIndicator: PropTypes.node,
  reset: PropTypes.node,
  submit: PropTypes.node,
  focusShortcuts: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
  autoFocus: PropTypes.bool,
  searchAsYouType: PropTypes.bool,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
  onChange: PropTypes.func,
  isSearchStalled: PropTypes.bool,
  showLoadingIndicator: PropTypes.bool,
  inputRef: PropTypes.oneOfType([PropTypes.func, PropTypes.exact({
    current: PropTypes.object
  })]),
  inputId: PropTypes.string
});

_defineProperty(SearchBox, "defaultProps", {
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

export default translatable({
  resetTitle: 'Clear the search query.',
  submitTitle: 'Submit your search query.',
  placeholder: 'Search here…'
})(SearchBox);