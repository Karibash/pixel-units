export const isClient = (): boolean => {
  return typeof document !== 'undefined';
};

export const getFontSizePixelValue = (element: Element | undefined): number | undefined => {
  if (!isClient()) return undefined;
  return parseFloat(getComputedStyle(element ?? document.documentElement).fontSize);
};

export const getViewWidthPixelValue = (): number | undefined => {
  if (!isClient()) return undefined;
  return window.parent.screen.width;
};

export const getViewHeightPixelValue = (): number | undefined => {
  if (!isClient()) return undefined;
  return window.parent.screen.height;
};
