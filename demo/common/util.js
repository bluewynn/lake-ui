export const deepGet = (source, path) => {
  const depths = path.split('.');

  return depths.reduce((prev, crt) => {
    prev = prev[crt] || undefined;
    return prev;
  }, source);
};

export const upperFirst = (str = '') => str.charAt(0).toUpperCase() + str.slice(1);
export const camelCase = (str = '') => {
  return str.split('-').reduce((prev, crt, index) => {
    return index === 0 ? prev + crt : prev + upperFirst(crt);
  }, '');
};
export const groupBy = (arr = [], path = '') => {
  return arr.reduce((prev, crt) => {
    const key = deepGet(crt, path);

    if (key) {
      prev[key] = prev[key] || [];
      prev[key].push(crt);
    }

    return prev;
  }, {});
};

export default {
  upperFirst,
  camelCase,
  groupBy,
  deepGet,
};
