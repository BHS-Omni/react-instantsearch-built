"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _utils = require("../core/utils");

var cx = (0, _utils.createClassNames)('RelevantSort');

var DefaultButtonTextComponent = function DefaultButtonTextComponent(_ref) {
  var isRelevantSorted = _ref.isRelevantSorted;
  return _react.default.createElement("span", null, isRelevantSorted ? 'See all results' : 'See relevant results');
};

var RelevantSort = function RelevantSort(_ref2) {
  var _ref2$className = _ref2.className,
      className = _ref2$className === void 0 ? '' : _ref2$className,
      isVirtualReplica = _ref2.isVirtualReplica,
      isRelevantSorted = _ref2.isRelevantSorted,
      _ref2$buttonTextCompo = _ref2.buttonTextComponent,
      ButtonTextComponent = _ref2$buttonTextCompo === void 0 ? DefaultButtonTextComponent : _ref2$buttonTextCompo,
      TextComponent = _ref2.textComponent,
      refine = _ref2.refine;
  return !isVirtualReplica ? null : _react.default.createElement("div", {
    className: (0, _classnames.default)(cx(''), className)
  }, _react.default.createElement("div", {
    className: cx('text')
  }, TextComponent && _react.default.createElement(TextComponent, {
    isRelevantSorted: isRelevantSorted
  })), _react.default.createElement("button", {
    className: cx('button'),
    onClick: function onClick() {
      return refine(isRelevantSorted ? 0 : undefined);
    }
  }, _react.default.createElement(ButtonTextComponent, {
    isRelevantSorted: isRelevantSorted
  })));
};

RelevantSort.propTypes = {
  buttonTextComponent: _propTypes.default.func,
  className: _propTypes.default.string,
  isVirtualReplica: _propTypes.default.bool.isRequired,
  isRelevantSorted: _propTypes.default.bool.isRequired,
  refine: _propTypes.default.func.isRequired,
  textComponent: _propTypes.default.func
};
var _default = RelevantSort;
exports.default = _default;