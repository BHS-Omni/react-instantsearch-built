"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactInstantsearchCore = require("react-instantsearch-core");

var _SortBy = _interopRequireDefault(require("../components/SortBy"));

/**
 * The SortBy component displays a list of indexes allowing a user to change the hits are sorting.
 * @name SortBy
 * @requirements Algolia handles sorting by creating replica indices. [Read more about sorting](https://www.algolia.com/doc/guides/relevance/sorting/) on
 * the Algolia website.
 * @kind widget
 * @propType {string} id - The id of the select input
 * @propType {{value: string, label: string}[]} items - The list of indexes to search in.
 * @propType {string} defaultRefinement - The default selected index.
 * @propType {function} [transformItems] - Function to modify the items being displayed, e.g. for filtering or sorting them. Takes an items as parameter and expects it back in return.
 * @themeKey ais-SortBy - the root div of the widget
 * @themeKey ais-SortBy-select - the select
 * @themeKey ais-SortBy-option - the select option
 * @example
 * import React from 'react';
 * import algoliasearch from 'algoliasearch/lite';
 * import { InstantSearch, SortBy } from 'react-instantsearch-dom';
 *
 * const searchClient = algoliasearch(
 *   'latency',
 *   '6be0576ff61c053d5f9a3225e2a90f76'
 * );
 *
 * const App = () => (
 *   <InstantSearch
 *     searchClient={searchClient}
 *     indexName="instant_search"
 *   >
 *     <SortBy
 *       defaultRefinement="instant_search"
 *       items={[
 *         { value: 'instant_search', label: 'Featured' },
 *         { value: 'instant_search_price_asc', label: 'Price asc.' },
 *         { value: 'instant_search_price_desc', label: 'Price desc.' },
 *       ]}
 *     />
 *   </InstantSearch>
 * );
 */
var _default = (0, _reactInstantsearchCore.connectSortBy)(_SortBy.default);

exports.default = _default;