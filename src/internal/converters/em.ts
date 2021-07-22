import { UnitSuffix } from 'defs';
import { UnitConverterOptions, noConvert } from 'internal/converters';
import { pixel } from 'internal/converters/pixel';

const emToPixel = (value: number, options: UnitConverterOptions): number => {
  return value * options.emPixelValue;
};

const emToCentimeter = (value: number, options: UnitConverterOptions): number => {
  return pixel.cm(emToPixel(value, options));
};

const emToMillimeter = (value: number, options: UnitConverterOptions): number => {
  return pixel.mm(emToPixel(value, options));
};

const emToQuarter = (value: number, options: UnitConverterOptions): number => {
  return pixel.Q(emToPixel(value, options));
};

const emToInch = (value: number, options: UnitConverterOptions): number => {
  return pixel.in(emToPixel(value, options));
};

const emToPica = (value: number, options: UnitConverterOptions): number => {
  return pixel.pc(emToPixel(value, options));
};

const emToPoint = (value: number, options: UnitConverterOptions): number => {
  return pixel.pt(emToPixel(value, options));
};

const emToREM = (value: number, options: UnitConverterOptions): number => {
  return pixel.rem(emToPixel(value, options), options);
};

const emToViewWidth = (value: number, options: UnitConverterOptions): number => {
  return pixel.vw(emToPixel(value, options), options);
};

const emToViewHeight = (value: number, options: UnitConverterOptions): number => {
  return pixel.vh(emToPixel(value, options), options);
};

const emToViewMin = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmin(emToPixel(value, options), options);
};

const emToViewMax = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmax(emToPixel(value, options), options);
};

export const em = {
  [UnitSuffix.Pixel]: emToPixel,
  [UnitSuffix.Centimeter]: emToCentimeter,
  [UnitSuffix.Millimeter]: emToMillimeter,
  [UnitSuffix.Quarter]: emToQuarter,
  [UnitSuffix.Inch]: emToInch,
  [UnitSuffix.Pica]: emToPica,
  [UnitSuffix.Point]: emToPoint,
  [UnitSuffix.REM]: emToREM,
  [UnitSuffix.EM]: noConvert,
  [UnitSuffix.ViewWidth]: emToViewWidth,
  [UnitSuffix.ViewHeight]: emToViewHeight,
  [UnitSuffix.ViewMin]: emToViewMin,
  [UnitSuffix.ViewMax]: emToViewMax,
};
