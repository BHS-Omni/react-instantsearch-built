import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { createClassNames } from '../core/utils';
var cx = createClassNames('RelevantSort');

var DefaultButtonTextComponent = function DefaultButtonTextComponent(_ref) {
  var isRelevantSorted = _ref.isRelevantSorted;
  return React.createElement("span", null, isRelevantSorted ? 'See all results' : 'See relevant results');
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
  return !isVirtualReplica ? null : React.createElement("div", {
    className: classNames(cx(''), className)
  }, React.createElement("div", {
    className: cx('text')
  }, TextComponent && React.createElement(TextComponent, {
    isRelevantSorted: isRelevantSorted
  })), React.createElement("button", {
    className: cx('button'),
    onClick: function onClick() {
      return refine(isRelevantSorted ? 0 : undefined);
    }
  }, React.createElement(ButtonTextComponent, {
    isRelevantSorted: isRelevantSorted
  })));
};

RelevantSort.propTypes = {
  buttonTextComponent: PropTypes.func,
  className: PropTypes.string,
  isVirtualReplica: PropTypes.bool.isRequired,
  isRelevantSorted: PropTypes.bool.isRequired,
  refine: PropTypes.func.isRequired,
  textComponent: PropTypes.func
};
export default RelevantSort;