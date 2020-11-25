export const findRootFontSize = (): number|null => {
  if (typeof document !== 'undefined') {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
  return null;
};

export const tryFindRootFontSize = (defaultSize?: number): number => {
  const rootFontSize = findRootFontSize();
  if (typeof rootFontSize === 'number') {
    return rootFontSize;
  }

  if (typeof defaultSize === 'number') {
    return defaultSize;
  }

  throw new Error('The font size of the root element could not be obtained. Run in a browser or specify an default size.');
};
