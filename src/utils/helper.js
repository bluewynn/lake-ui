export const upperFirst = (str = '') => str.charAt(0).toUpperCase() + str.slice(1);

export const assert = (condition = false, msg) => {
  if (!condition) throw new Error(`[lake-ui] ${msg}`);
};
