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

var _classnames = _interopRequireDefault(require("classnames"));

var _reactInstantsearchCore = require("react-instantsearch-core");

var _utils = require("../core/utils");

var cx = (0, _utils.createClassNames)('MenuSelect');

var MenuSelect =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(MenuSelect, _Component);

  function MenuSelect() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, MenuSelect);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MenuSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "handleSelectChange", function (_ref) {
      var value = _ref.target.value;

      _this.props.refine(value === 'ais__see__all__option' ? '' : value);
    });
    return _this;
  }

  (0, _createClass2.default)(MenuSelect, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          items = _this$props.items,
          canRefine = _this$props.canRefine,
          translate = _this$props.translate,
          className = _this$props.className;
      return _react.default.createElement("div", {
        className: (0, _classnames.default)(cx('', !canRefine && '-noRefinement'), className)
      }, _react.default.createElement("select", {
        id: id,
        value: this.selectedValue,
        onChange: this.handleSelectChange,
        className: cx('select')
      }, _react.default.createElement("option", {
        value: "ais__see__all__option",
        className: cx('option')
      }, translate('seeAllOption')), items.map(function (item) {
        return _react.default.createElement("option", {
          key: item.value,
          value: item.value,
          className: cx('option')
        }, item.label, " (", item.count, ")");
      })));
    }
  }, {
    key: "selectedValue",
    get: function get() {
      var _ref2 = (0, _utils.find)(this.props.items, function (item) {
        return item.isRefined === true;
      }) || {
        value: 'ais__see__all__option'
      },
          value = _ref2.value;

      return value;
    }
  }]);
  return MenuSelect;
}(_react.Component);

(0, _defineProperty2.default)(MenuSelect, "propTypes", {
  id: _propTypes.default.string,
  items: _propTypes.default.arrayOf(_propTypes.default.shape({
    label: _propTypes.default.string.isRequired,
    value: _propTypes.default.string.isRequired,
    count: _propTypes.default.oneOfType([_propTypes.default.number.isRequired, _propTypes.default.string.isRequired]),
    isRefined: _propTypes.default.bool.isRequired
  })).isRequired,
  canRefine: _propTypes.default.bool.isRequired,
  refine: _propTypes.default.func.isRequired,
  translate: _propTypes.default.func.isRequired,
  className: _propTypes.default.string
});
(0, _defineProperty2.default)(MenuSelect, "defaultProps", {
  className: ''
});

var _default = (0, _reactInstantsearchCore.translatable)({
  seeAllOption: 'See all'
})(MenuSelect);

exports.default = _default;