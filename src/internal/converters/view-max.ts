import { UnitSuffix } from '@src/defs';
import { UnitConverterOptions, noConvert } from '@src/internal/converters';
import { pixel } from '@src/internal/converters/pixel';

const viewMaxToPixel = (value: number, options: UnitConverterOptions): number => {
  return value * Math.max(options.viewWidthPixelValue, options.viewHeightPixelValue) * 100;
};

const viewMaxToCentimeter = (value: number, options: UnitConverterOptions): number => {
  return pixel.cm(viewMaxToPixel(value, options));
};

const viewMaxToMillimeter = (value: number, options: UnitConverterOptions): number => {
  return pixel.mm(viewMaxToPixel(value, options));
};

const viewMaxToQuarter = (value: number, options: UnitConverterOptions): number => {
  return pixel.Q(viewMaxToPixel(value, options));
};

const viewMaxToInch = (value: number, options: UnitConverterOptions): number => {
  return pixel.in(viewMaxToPixel(value, options));
};

const viewMaxToPica = (value: number, options: UnitConverterOptions): number => {
  return pixel.pc(viewMaxToPixel(value, options));
};

const viewMaxToPoint = (value: number, options: UnitConverterOptions): number => {
  return pixel.pt(viewMaxToPixel(value, options));
};

const viewMaxToREM = (value: number, options: UnitConverterOptions): number => {
  return pixel.rem(viewMaxToPixel(value, options), options);
};

const viewMaxToEM = (value: number, options: UnitConverterOptions): number => {
  return pixel.em(viewMaxToPixel(value, options), options);
};

const viewMaxToViewWidth = (value: number, options: UnitConverterOptions): number => {
  return pixel.vw(viewMaxToPixel(value, options), options);
};

const viewMaxToViewHeight = (value: number, options: UnitConverterOptions): number => {
  return pixel.vh(viewMaxToPixel(value, options), options);
};

const viewMaxToViewMin = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmin(viewMaxToPixel(value, options), options);
};

export const viewMax = {
  [UnitSuffix.Pixel]: viewMaxToPixel,
  [UnitSuffix.Centimeter]: viewMaxToCentimeter,
  [UnitSuffix.Millimeter]: viewMaxToMillimeter,
  [UnitSuffix.Quarter]: viewMaxToQuarter,
  [UnitSuffix.Inch]: viewMaxToInch,
  [UnitSuffix.Pica]: viewMaxToPica,
  [UnitSuffix.Point]: viewMaxToPoint,
  [UnitSuffix.REM]: viewMaxToREM,
  [UnitSuffix.EM]: viewMaxToEM,
  [UnitSuffix.ViewWidth]: viewMaxToViewWidth,
  [UnitSuffix.ViewHeight]: viewMaxToViewHeight,
  [UnitSuffix.ViewMin]: viewMaxToViewMin,
  [UnitSuffix.ViewMax]: noConvert,
};
