"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactInstantsearchCore = require("react-instantsearch-core");

var _PanelCallbackHandler = _interopRequireDefault(require("../components/PanelCallbackHandler"));

var _ClearRefinements = _interopRequireDefault(require("../components/ClearRefinements"));

/**
 * The ClearRefinements widget displays a button that lets the user clean every refinement applied
 * to the search.
 * @name ClearRefinements
 * @kind widget
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @propType {boolean} [clearsQuery=false] - Pass true to also clear the search query
 * @themeKey ais-ClearRefinements - the root div of the widget
 * @themeKey ais-ClearRefinements-button - the clickable button
 * @themeKey ais-ClearRefinements-button--disabled - the disabled clickable button
 * @translationKey reset - the clear all button value
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, ClearRefinements, RefinementList } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <ClearRefinements />
 *     <RefinementList
 *       attribute="brand"
 *       defaultRefinement={['Apple']}
 *     />
 *   </InstantSearch>
 * );
 */
var ClearRefinementsWidget = function ClearRefinementsWidget(props) {
  return _react.default.createElement(_PanelCallbackHandler.default, props, _react.default.createElement(_ClearRefinements.default, props));
};

var _default = (0, _reactInstantsearchCore.connectCurrentRefinements)(ClearRefinementsWidget);

exports.default = _default;