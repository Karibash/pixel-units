import { Unit, UnitSuffix } from 'defs';
import { centimeter } from 'internal/converters/centimeter';
import { em } from 'internal/converters/em';
import { inch } from 'internal/converters/inch';
import { magnification } from 'internal/converters/magnification';
import { millimeter } from 'internal/converters/millimeter';
import { percent } from 'internal/converters/percent';
import { pica } from 'internal/converters/pica';
import { pixel } from 'internal/converters/pixel';
import { point } from 'internal/converters/point';
import { quarter } from 'internal/converters/quarter';
import { rem } from 'internal/converters/rem';
import { viewHeight } from 'internal/converters/view-height';
import { viewMax } from 'internal/converters/view-max';
import { viewMin } from 'internal/converters/view-min';
import { viewWidth } from 'internal/converters/view-width';

export type UnitConverterOptions = {
  remPixelValue: number;
  emPixelValue: number;
  viewWidthPixelValue: number;
  viewHeightPixelValue: number;
};

export const noConvert = (unitValue: Unit<UnitSuffix>): Unit<UnitSuffix> => {
  return unitValue;
};

export const converterMap: { [key: string]: { [key: string]: Function | undefined } | undefined } = {
  [UnitSuffix.Pixel]: pixel,
  [UnitSuffix.Centimeter]: centimeter,
  [UnitSuffix.Millimeter]: millimeter,
  [UnitSuffix.Quarter]: quarter,
  [UnitSuffix.Inch]: inch,
  [UnitSuffix.Pica]: pica,
  [UnitSuffix.Point]: point,
  [UnitSuffix.REM]: rem,
  [UnitSuffix.EM]: em,
  [UnitSuffix.ViewWidth]: viewHeight,
  [UnitSuffix.ViewHeight]: viewWidth,
  [UnitSuffix.ViewMin]: viewMax,
  [UnitSuffix.ViewMax]: viewMin,
  [UnitSuffix.Magnification]: magnification,
  [UnitSuffix.Percent]: percent,
};
