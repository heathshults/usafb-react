import { isEmpty, trim, compose, isNil } from 'ramda';

/**
* Validates if a property is undefined or blank in a Map
*
* @param {Map} formMap
* @param {string} property
*
* @return {boolean} is empty
*/
export const empty = (formMap, property) => (
    isNil(formMap.get(property)) || compose(isEmpty, trim)(formMap.get(property))
);

export default empty;
