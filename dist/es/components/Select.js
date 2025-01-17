import _classCallCheck from "@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "@babel/runtime/helpers/esm/createClass";
import _possibleConstructorReturn from "@babel/runtime/helpers/esm/possibleConstructorReturn";
import _getPrototypeOf from "@babel/runtime/helpers/esm/getPrototypeOf";
import _assertThisInitialized from "@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "@babel/runtime/helpers/esm/inherits";
import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
import React, { Component } from 'react';
import PropTypes from 'prop-types';

var Select =
/*#__PURE__*/
function (_Component) {
  _inherits(Select, _Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onChange", function (e) {
      _this.props.onSelect(e.target.value);
    });

    return _this;
  }

  _createClass(Select, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cx = _this$props.cx,
          id = _this$props.id,
          items = _this$props.items,
          selectedItem = _this$props.selectedItem;
      return React.createElement("select", {
        id: id,
        className: cx('select'),
        value: selectedItem,
        onChange: this.onChange
      }, items.map(function (item) {
        return React.createElement("option", {
          className: cx('option'),
          key: item.key === undefined ? item.value : item.key,
          disabled: item.disabled,
          value: item.value
        }, item.label === undefined ? item.value : item.label);
      }));
    }
  }]);

  return Select;
}(Component);

_defineProperty(Select, "propTypes", {
  cx: PropTypes.func.isRequired,
  id: PropTypes.string,
  onSelect: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    key: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.string,
    disabled: PropTypes.bool
  })).isRequired,
  selectedItem: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
});

export { Select as default };