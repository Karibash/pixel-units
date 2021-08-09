import { UnitSuffix } from '@src/defs';
import { noConvert } from '@src/internal/converters';

const percentToMagnification = (value: number): number => {
  return value / 100;
};

export const percent = {
  [UnitSuffix.Percent]: noConvert,
  [UnitSuffix.Magnification]: percentToMagnification,
};
