import camelCase from 'lodash.camelcase';

export function camelCaseKeys(obj) {
  return Object.entries(obj).reduce((accumulated, [key, value]) => {
    return {
      ...accumulated,
      [camelCase(key)]: value,
    };
  }, {});
}

export function camelCaseArr(arr) {
  return arr.map((item) => camelCaseKeys(item));
}
