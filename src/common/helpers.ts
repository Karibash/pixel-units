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

export const findViewHeight = (): number|null => {
  if (typeof window !== 'undefined') {
    return window.parent.screen.height;
  }
  return null;
};

export const tryFindViewHeight = (defaultHeight?: number): number => {
  const height = findViewHeight();
  if (typeof height === 'number') {
    return height;
  }

  if (typeof defaultHeight === 'number') {
    return defaultHeight;
  }

  throw new Error('The view height could not be obtained. Run it in a browser or specify a default size.');
};

export const findViewWidth = (): number|null => {
  if (typeof window !== 'undefined') {
    return window.parent.screen.width;
  }
  return null;
};

export const tryFindViewWidth = (defaultWidth?: number): number => {
  const width = findViewWidth();
  if (typeof width === 'number') {
    return width;
  }

  if (typeof defaultWidth === 'number') {
    return defaultWidth;
  }

  throw new Error('The view width could not be obtained. Run it in a browser or specify a default size.');
};
