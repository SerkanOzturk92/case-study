/**
 * Retrieves the value at a given path from an object.
 *
 * The path can include dot notation for nested objects and
 * bracket notation for arrays or keys with special characters.
 *
 * @param {object} obj - The object from which to retrieve the value.
 * @param {string} path - The path string, using dot notation and/or bracket notation.
 * @returns {any} - The value at the specified path, or undefined if the path does not exist.
 *
 * @example
 * const obj = {
 *   a: {
 *     b: [
 *       { c: 3 },
 *       { d: 4 }
 *     ]
 *   }
 * };
 *
 * getValueByPath(obj, 'a.b[1].d'); // returns 4
 * getValueByPath(obj, 'a.b[0].c'); // returns 3
 * getValueByPath(obj, 'a.b[2].e'); // returns undefined
 */
export const getValueByPath = (obj: any, path: string) => {
  const keys = path.split('.');
  let currentValue = obj;

  for (let key of keys) {
    if (key.includes('[')) {
      const parts = key.split(/[\[\]]/).filter(Boolean);
      for (let part of parts) {
        currentValue = currentValue[part];
      }
    } else {
      currentValue = currentValue[key];
    }

    if (currentValue === undefined) {
      return undefined;
    }
  }

  return currentValue;
};
