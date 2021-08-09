import { UnitSuffix } from '@src/defs';
import { UnitConverterOptions, noConvert } from '@src/internal/converters';
import { pixel } from '@src/internal/converters/pixel';

const viewWidthToPixel = (value: number, options: UnitConverterOptions): number => {
  return value * options.viewWidthPixelValue;
};

const viewWidthToCentimeter = (value: number, options: UnitConverterOptions): number => {
  return pixel.cm(viewWidthToPixel(value, options));
};

const viewWidthToMillimeter = (value: number, options: UnitConverterOptions): number => {
  return pixel.mm(viewWidthToPixel(value, options));
};

const viewWidthToQuarter = (value: number, options: UnitConverterOptions): number => {
  return pixel.Q(viewWidthToPixel(value, options));
};

const viewWidthToInch = (value: number, options: UnitConverterOptions): number => {
  return pixel.in(viewWidthToPixel(value, options));
};

const viewWidthToPica = (value: number, options: UnitConverterOptions): number => {
  return pixel.pc(viewWidthToPixel(value, options));
};

const viewWidthToPoint = (value: number, options: UnitConverterOptions): number => {
  return pixel.pt(viewWidthToPixel(value, options));
};

const viewWidthToREM = (value: number, options: UnitConverterOptions): number => {
  return pixel.rem(viewWidthToPixel(value, options), options);
};

const viewWidthToEM = (value: number, options: UnitConverterOptions): number => {
  return pixel.em(viewWidthToPixel(value, options), options);
};

const viewWidthToViewHeight = (value: number, options: UnitConverterOptions): number => {
  return pixel.vh(viewWidthToPixel(value, options), options);
};

const viewWidthToViewMin = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmin(viewWidthToPixel(value, options), options);
};

const viewWidthToViewMax = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmax(viewWidthToPixel(value, options), options);
};

export const viewWidth = {
  [UnitSuffix.Pixel]: viewWidthToPixel,
  [UnitSuffix.Centimeter]: viewWidthToCentimeter,
  [UnitSuffix.Millimeter]: viewWidthToMillimeter,
  [UnitSuffix.Quarter]: viewWidthToQuarter,
  [UnitSuffix.Inch]: viewWidthToInch,
  [UnitSuffix.Pica]: viewWidthToPica,
  [UnitSuffix.Point]: viewWidthToPoint,
  [UnitSuffix.REM]: viewWidthToREM,
  [UnitSuffix.EM]: viewWidthToEM,
  [UnitSuffix.ViewWidth]: noConvert,
  [UnitSuffix.ViewHeight]: viewWidthToViewHeight,
  [UnitSuffix.ViewMin]: viewWidthToViewMin,
  [UnitSuffix.ViewMax]: viewWidthToViewMax,
};
