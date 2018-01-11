export const humanize = (str) => {
  /* eslint-disable */
  if (str) {
    let frags = str.split('_');
    for (let i = 0; i < frags.length; i += 1) {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
  }
  return ''
};

export default humanize;
