"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactInstantsearchCore = require("react-instantsearch-core");

var _utils = require("../core/utils");

var cx = (0, _utils.createClassNames)('Stats');

var Stats = function Stats(_ref) {
  var _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      areHitsSorted = _ref.areHitsSorted,
      nbHits = _ref.nbHits,
      nbSortedHits = _ref.nbSortedHits,
      processingTimeMS = _ref.processingTimeMS,
      translate = _ref.translate;
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(cx(''), className)
  }, _react.default.createElement("span", {
    className: cx('text')
  }, translate('stats', nbHits, processingTimeMS, nbSortedHits, areHitsSorted)));
};

Stats.propTypes = {
  className: _propTypes.default.string,
  areHitsSorted: _propTypes.default.bool.isRequired,
  nbHits: _propTypes.default.number.isRequired,
  nbSortedHits: _propTypes.default.number,
  processingTimeMS: _propTypes.default.number.isRequired,
  translate: _propTypes.default.func.isRequired
};

var _default = (0, _reactInstantsearchCore.translatable)({
  stats: function stats(n, ms, nSorted, areHitsSorted) {
    return areHitsSorted && n !== nSorted ? "".concat(nSorted.toLocaleString(), " relevant results sorted out of ").concat(n.toLocaleString(), " found in ").concat(ms.toLocaleString(), "ms") : "".concat(n.toLocaleString(), " results found in ").concat(ms.toLocaleString(), "ms");
  }
})(Stats);

exports.default = _default;