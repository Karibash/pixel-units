export const isClient = (): boolean => {
  return typeof document !== 'undefined';
};

export const getFontSizePixelValue = (element: Element): number | undefined => {
  if (!isClient()) return undefined;
  return parseFloat(getComputedStyle(element).fontSize);
};

export const getViewWidthPixelValue = (): number | undefined => {
  if (!isClient()) return undefined;
  return window.parent.screen.width;
};

export const getViewHeightPixelValue = (): number | undefined => {
  if (!isClient()) return undefined;
  return window.parent.screen.height;
};
