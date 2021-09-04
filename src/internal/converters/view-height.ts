import { UnitSuffix } from '@src/defs';
import { UnitConverterOptions, noConvert } from '@src/internal/converters';
import { pixel } from '@src/internal/converters/pixel';

const viewHeightToPixel = (value: number, options: UnitConverterOptions): number => {
  return value * options.viewHeightPixelValue();
};

const viewHeightToCentimeter = (value: number, options: UnitConverterOptions): number => {
  return pixel.cm(viewHeightToPixel(value, options));
};

const viewHeightToMillimeter = (value: number, options: UnitConverterOptions): number => {
  return pixel.mm(viewHeightToPixel(value, options));
};

const viewHeightToQuarter = (value: number, options: UnitConverterOptions): number => {
  return pixel.Q(viewHeightToPixel(value, options));
};

const viewHeightToInch = (value: number, options: UnitConverterOptions): number => {
  return pixel.in(viewHeightToPixel(value, options));
};

const viewHeightToPica = (value: number, options: UnitConverterOptions): number => {
  return pixel.pc(viewHeightToPixel(value, options));
};

const viewHeightToPoint = (value: number, options: UnitConverterOptions): number => {
  return pixel.pt(viewHeightToPixel(value, options));
};

const viewHeightToREM = (value: number, options: UnitConverterOptions): number => {
  return pixel.rem(viewHeightToPixel(value, options), options);
};

const viewHeightToEM = (value: number, options: UnitConverterOptions): number => {
  return pixel.em(viewHeightToPixel(value, options), options);
};

const viewHeightToViewWidth = (value: number, options: UnitConverterOptions): number => {
  return pixel.vw(viewHeightToPixel(value, options), options);
};

const viewHeightToViewMin = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmin(viewHeightToPixel(value, options), options);
};

const viewHeightToViewMax = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmax(viewHeightToPixel(value, options), options);
};

export const viewHeight = {
  [UnitSuffix.Pixel]: viewHeightToPixel,
  [UnitSuffix.Centimeter]: viewHeightToCentimeter,
  [UnitSuffix.Millimeter]: viewHeightToMillimeter,
  [UnitSuffix.Quarter]: viewHeightToQuarter,
  [UnitSuffix.Inch]: viewHeightToInch,
  [UnitSuffix.Pica]: viewHeightToPica,
  [UnitSuffix.Point]: viewHeightToPoint,
  [UnitSuffix.REM]: viewHeightToREM,
  [UnitSuffix.EM]: viewHeightToEM,
  [UnitSuffix.ViewWidth]: viewHeightToViewWidth,
  [UnitSuffix.ViewHeight]: noConvert,
  [UnitSuffix.ViewMin]: viewHeightToViewMin,
  [UnitSuffix.ViewMax]: viewHeightToViewMax,
};
