import { UnitSuffix } from 'defs';
import { UnitConverterOptions, noConvert } from 'internal/converters';
import { pixel } from 'internal/converters/pixel';

const remToPixel = (value: number, options: UnitConverterOptions): number => {
  return value * options.remPixelValue;
};

const remToCentimeter = (value: number, options: UnitConverterOptions): number => {
  return pixel.cm(remToPixel(value, options));
};

const remToMillimeter = (value: number, options: UnitConverterOptions): number => {
  return pixel.mm(remToPixel(value, options));
};

const remToQuarter = (value: number, options: UnitConverterOptions): number => {
  return pixel.Q(remToPixel(value, options));
};

const remToInch = (value: number, options: UnitConverterOptions): number => {
  return pixel.in(remToPixel(value, options));
};

const remToPica = (value: number, options: UnitConverterOptions): number => {
  return pixel.pc(remToPixel(value, options));
};

const remToPoint = (value: number, options: UnitConverterOptions): number => {
  return pixel.pt(remToPixel(value, options));
};

const remToEM = (value: number, options: UnitConverterOptions): number => {
  return pixel.em(remToPixel(value, options), options);
};

const remToViewWidth = (value: number, options: UnitConverterOptions): number => {
  return pixel.vw(remToPixel(value, options), options);
};

const remToViewHeight = (value: number, options: UnitConverterOptions): number => {
  return pixel.vh(remToPixel(value, options), options);
};

const remToViewMin = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmin(remToPixel(value, options), options);
};

const remToViewMax = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmax(remToPixel(value, options), options);
};

export const rem = {
  [UnitSuffix.Pixel]: remToPixel,
  [UnitSuffix.Centimeter]: remToCentimeter,
  [UnitSuffix.Millimeter]: remToMillimeter,
  [UnitSuffix.Quarter]: remToQuarter,
  [UnitSuffix.Inch]: remToInch,
  [UnitSuffix.Pica]: remToPica,
  [UnitSuffix.Point]: remToPoint,
  [UnitSuffix.REM]: noConvert,
  [UnitSuffix.EM]: remToEM,
  [UnitSuffix.ViewWidth]: remToViewWidth,
  [UnitSuffix.ViewHeight]: remToViewHeight,
  [UnitSuffix.ViewMin]: remToViewMin,
  [UnitSuffix.ViewMax]: remToViewMax,
};
