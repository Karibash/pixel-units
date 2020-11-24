export const findBaseFontSize = (): number|null => {
  if (typeof document !== 'undefined') {
    return parseFloat(getComputedStyle(document.documentElement).fontSize);
  }
  return null;
};

export const tryFindBaseFontSize = (defaultSize?: number): number => {
  const baseSize = findBaseFontSize();
  if (typeof baseSize === 'number') {
    return baseSize;
  }

  if (typeof defaultSize === 'number') {
    return defaultSize;
  }

  throw new Error('The font size of the root element could not be obtained. Run in a browser or specify an initial size.');
};
