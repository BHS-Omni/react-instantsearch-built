"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var Select =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(Select, _Component);

  function Select() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Select);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Select)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "onChange", function (e) {
      _this.props.onSelect(e.target.value);
    });
    return _this;
  }

  (0, _createClass2.default)(Select, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cx = _this$props.cx,
          id = _this$props.id,
          items = _this$props.items,
          selectedItem = _this$props.selectedItem;
      return _react.default.createElement("select", {
        id: id,
        className: cx('select'),
        value: selectedItem,
        onChange: this.onChange
      }, items.map(function (item) {
        return _react.default.createElement("option", {
          className: cx('option'),
          key: item.key === undefined ? item.value : item.key,
          disabled: item.disabled,
          value: item.value
        }, item.label === undefined ? item.value : item.label);
      }));
    }
  }]);
  return Select;
}(_react.Component);

exports.default = Select;
(0, _defineProperty2.default)(Select, "propTypes", {
  cx: _propTypes.default.func.isRequired,
  id: _propTypes.default.string,
  onSelect: _propTypes.default.func.isRequired,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired,
    key: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]),
    label: _propTypes.default.string,
    disabled: _propTypes.default.bool
  })).isRequired,
  selectedItem: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number]).isRequired
});