import { UnitSuffix } from '@src/defs';
import {
  CENTIMETER_PIXEL_VALUE,
  INCH_PIXEL_VALUE,
  MILLIMETER_PIXEL_VALUE,
  PICA_PIXEL_VALUE,
  POINT_PIXEL_VALUE,
  QUARTER_PIXEL_VALUE
} from '@src/internal/constants';
import { UnitConverterOptions, noConvert } from '@src/internal/converters';

const pixelToCentimeter = (value: number): number => {
  return value / CENTIMETER_PIXEL_VALUE;
};

const pixelToMillimeter = (value: number): number => {
  return value / MILLIMETER_PIXEL_VALUE;
};

const pixelToQuarter = (value: number): number => {
  return value / QUARTER_PIXEL_VALUE;
};

const pixelToInch = (value: number): number => {
  return value / INCH_PIXEL_VALUE;
};

const pixelToPica = (value: number): number => {
  return value / PICA_PIXEL_VALUE;
};

const pixelToPoint = (value: number): number => {
  return value / POINT_PIXEL_VALUE;
};

const pixelToREM = (value: number, options: UnitConverterOptions): number => {
  return value / options.remPixelValue;
};

const pixelToEM = (value: number, options: UnitConverterOptions): number => {
  return value / options.emPixelValue;
};

const pixelToViewWidth = (value: number, options: UnitConverterOptions): number => {
  return value / options.viewWidthPixelValue * 100;
};

const pixelToViewHeight = (value: number, options: UnitConverterOptions): number => {
  return value / options.viewHeightPixelValue * 100;
};

const pixelToViewMin = (value: number, options: UnitConverterOptions): number => {
  return value / Math.min(options.viewWidthPixelValue, options.viewHeightPixelValue) * 100;
};

const pixelToViewMax = (value: number, options: UnitConverterOptions): number => {
  return value / Math.max(options.viewWidthPixelValue, options.viewHeightPixelValue) * 100;
};

export const pixel = {
  [UnitSuffix.Pixel]: noConvert,
  [UnitSuffix.Centimeter]: pixelToCentimeter,
  [UnitSuffix.Millimeter]: pixelToMillimeter,
  [UnitSuffix.Quarter]: pixelToQuarter,
  [UnitSuffix.Inch]: pixelToInch,
  [UnitSuffix.Pica]: pixelToPica,
  [UnitSuffix.Point]: pixelToPoint,
  [UnitSuffix.REM]: pixelToREM,
  [UnitSuffix.EM]: pixelToEM,
  [UnitSuffix.ViewWidth]: pixelToViewWidth,
  [UnitSuffix.ViewHeight]: pixelToViewHeight,
  [UnitSuffix.ViewMin]: pixelToViewMin,
  [UnitSuffix.ViewMax]: pixelToViewMax,
};
