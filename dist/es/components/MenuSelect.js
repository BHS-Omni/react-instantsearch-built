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
import { createClassNames, find } from '../core/utils';
var cx = createClassNames('MenuSelect');

var MenuSelect =
/*#__PURE__*/
function (_Component) {
  _inherits(MenuSelect, _Component);

  function MenuSelect() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MenuSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MenuSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleSelectChange", function (_ref) {
      var value = _ref.target.value;

      _this.props.refine(value === 'ais__see__all__option' ? '' : value);
    });

    return _this;
  }

  _createClass(MenuSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          items = _this$props.items,
          canRefine = _this$props.canRefine,
          translate = _this$props.translate,
          className = _this$props.className;
      return React.createElement("div", {
        className: classNames(cx('', !canRefine && '-noRefinement'), className)
      }, React.createElement("select", {
        id: id,
        value: this.selectedValue,
        onChange: this.handleSelectChange,
        className: cx('select')
      }, React.createElement("option", {
        value: "ais__see__all__option",
        className: cx('option')
      }, translate('seeAllOption')), items.map(function (item) {
        return React.createElement("option", {
          key: item.value,
          value: item.value,
          className: cx('option')
        }, item.label, " (", item.count, ")");
      })));
    }
  }, {
    key: "selectedValue",
    get: function get() {
      var _ref2 = find(this.props.items, function (item) {
        return item.isRefined === true;
      }) || {
        value: 'ais__see__all__option'
      },
          value = _ref2.value;

      return value;
    }
  }]);

  return MenuSelect;
}(Component);

_defineProperty(MenuSelect, "propTypes", {
  id: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    count: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string.isRequired]),
    isRefined: PropTypes.bool.isRequired
  })).isRequired,
  canRefine: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  className: PropTypes.string
});

_defineProperty(MenuSelect, "defaultProps", {
  className: ''
});

export default translatable({
  seeAllOption: 'See all'
})(MenuSelect);