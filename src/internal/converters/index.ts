import { Unit, UnitSuffix } from '@src/defs';
import { centimeter } from '@src/internal/converters/centimeter';
import { em } from '@src/internal/converters/em';
import { inch } from '@src/internal/converters/inch';
import { magnification } from '@src/internal/converters/magnification';
import { millimeter } from '@src/internal/converters/millimeter';
import { percent } from '@src/internal/converters/percent';
import { pica } from '@src/internal/converters/pica';
import { pixel } from '@src/internal/converters/pixel';
import { point } from '@src/internal/converters/point';
import { quarter } from '@src/internal/converters/quarter';
import { rem } from '@src/internal/converters/rem';
import { viewHeight } from '@src/internal/converters/view-height';
import { viewMax } from '@src/internal/converters/view-max';
import { viewMin } from '@src/internal/converters/view-min';
import { viewWidth } from '@src/internal/converters/view-width';

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
