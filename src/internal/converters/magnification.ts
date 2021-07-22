import { UnitSuffix } from 'defs';
import { noConvert } from 'internal/converters';

const magnificationToPercent = (value: number): number => {
  return value * 100;
};

export const magnification = {
  [UnitSuffix.Percent]: magnificationToPercent,
  [UnitSuffix.Magnification]: noConvert,
};
