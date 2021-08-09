import { UnitSuffix } from '@src/defs';
import { UnitConverterOptions, noConvert } from '@src/internal/converters';
import { pixel } from '@src/internal/converters/pixel';

const viewMinToPixel = (value: number, options: UnitConverterOptions): number => {
  return value * Math.min(options.viewWidthPixelValue, options.viewHeightPixelValue) * 100;
};

const viewMinToCentimeter = (value: number, options: UnitConverterOptions): number => {
  return pixel.cm(viewMinToPixel(value, options));
};

const viewMinToMillimeter = (value: number, options: UnitConverterOptions): number => {
  return pixel.mm(viewMinToPixel(value, options));
};

const viewMinToQuarter = (value: number, options: UnitConverterOptions): number => {
  return pixel.Q(viewMinToPixel(value, options));
};

const viewMinToInch = (value: number, options: UnitConverterOptions): number => {
  return pixel.in(viewMinToPixel(value, options));
};

const viewMinToPica = (value: number, options: UnitConverterOptions): number => {
  return pixel.pc(viewMinToPixel(value, options));
};

const viewMinToPoint = (value: number, options: UnitConverterOptions): number => {
  return pixel.pt(viewMinToPixel(value, options));
};

const viewMinToREM = (value: number, options: UnitConverterOptions): number => {
  return pixel.rem(viewMinToPixel(value, options), options);
};

const viewMinToEM = (value: number, options: UnitConverterOptions): number => {
  return pixel.em(viewMinToPixel(value, options), options);
};

const viewMinToViewWidth = (value: number, options: UnitConverterOptions): number => {
  return pixel.vw(viewMinToPixel(value, options), options);
};

const viewMinToViewHeight = (value: number, options: UnitConverterOptions): number => {
  return pixel.vh(viewMinToPixel(value, options), options);
};

const viewMinToViewMax = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmax(viewMinToPixel(value, options), options);
};

export const viewMin = {
  [UnitSuffix.Pixel]: viewMinToPixel,
  [UnitSuffix.Centimeter]: viewMinToCentimeter,
  [UnitSuffix.Millimeter]: viewMinToMillimeter,
  [UnitSuffix.Quarter]: viewMinToQuarter,
  [UnitSuffix.Inch]: viewMinToInch,
  [UnitSuffix.Pica]: viewMinToPica,
  [UnitSuffix.Point]: viewMinToPoint,
  [UnitSuffix.REM]: viewMinToREM,
  [UnitSuffix.EM]: viewMinToEM,
  [UnitSuffix.ViewWidth]: viewMinToViewWidth,
  [UnitSuffix.ViewHeight]: viewMinToViewHeight,
  [UnitSuffix.ViewMin]: noConvert,
  [UnitSuffix.ViewMax]: viewMinToViewMax,
};
