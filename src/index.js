import { goods } from './goods.js';

/**
 * @param {string} brand
 * @returns {*}
 */
const brandFilter = (brand) => goods.filter(item => brand === item.brand);

/**
 * @param {string} color
 * @returns {*}
 */
const colorFilter = (color) => goods.filter(item => color === item.color);

/**
 * @param {string} model
 * @returns {*}
 */
const modelFilter = (model) => goods.filter(item => model === item.model);

/**
 * @param {number} memory
 * @returns {*}
 */
const memoryFilter = (memory) => goods.filter(item => memory === item.memory);

/**
 * @param {number} price
 * @returns {*}
 */
const priceFilter = (price) => goods.filter(item => price === item.price);

/**
 * @param {string} country
 * @returns {*}
 */
const countryFilter = (country) => goods.filter(item => country === item.country);

/**
 * @param {string} os
 * @returns {*}
 */
const osFilter = (os) => goods.filter(item => os === item.os);

/**
 * @param {number} from
 * @param {number} to
 */
const rangeFilter = (from, to) => goods.filter(item => from <= item.price && to >= item.price);

const minPriceReducer = () => goods.reduce((acc, item) => (item.price < acc) ? item.price : acc, Infinity);

const maxPriceReducer = () => goods.reduce((acc, item) => (item.price > acc) ? item.price : acc, 0);

const toMaxSorter = () => goods.sort((max, min) => {
  if (min.price < max.price) return -1;
  if (min.price > max.price) return 1;
  return 0;

});
const toMinSorter = () => goods.sort((max, min) => {
  if (min.price > max.price) return -1;
  if (min.price < max.price) return 1;
  return 0;

});

export const filters = {
  brandFilter,
  countryFilter,
  priceFilter,
  osFilter,
  colorFilter,
  memoryFilter,
  modelFilter,
  rangeFilter
};

export const reducers = {
  minPriceReducer,
  maxPriceReducer
};

export const sorters = {
  toMaxSorter,
  toMinSorter
};
