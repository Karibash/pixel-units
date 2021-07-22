import { UnitSuffix } from 'defs';
import { PICA_PIXEL_VALUE } from 'internal/constants';
import { UnitConverterOptions, noConvert } from 'internal/converters';
import { pixel } from 'internal/converters/pixel';

const picaToPixel = (value: number): number => {
  return value * PICA_PIXEL_VALUE;
};

const picaToCentimeter = (value: number): number => {
  return pixel.cm(picaToPixel(value));
};

const picaToMillimeter = (value: number): number => {
  return pixel.mm(picaToPixel(value));
};

const picaToQuarter = (value: number): number => {
  return pixel.Q(picaToPixel(value));
};

const picaToInch = (value: number): number => {
  return pixel.in(picaToPixel(value));
};

const picaToPoint = (value: number): number => {
  return pixel.pt(picaToPixel(value));
};

const picaToREM = (value: number, options: UnitConverterOptions): number => {
  return pixel.rem(picaToPixel(value), options);
};

const picaToEM = (value: number, options: UnitConverterOptions): number => {
  return pixel.em(picaToPixel(value), options);
};

const picaToViewWidth = (value: number, options: UnitConverterOptions): number => {
  return pixel.vw(picaToPixel(value), options);
};

const picaToViewHeight = (value: number, options: UnitConverterOptions): number => {
  return pixel.vh(picaToPixel(value), options);
};

const picaToViewMin = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmin(picaToPixel(value), options);
};

const picaToViewMax = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmax(picaToPixel(value), options);
};

export const pica = {
  [UnitSuffix.Pixel]: picaToPixel,
  [UnitSuffix.Centimeter]: picaToCentimeter,
  [UnitSuffix.Millimeter]: picaToMillimeter,
  [UnitSuffix.Quarter]: picaToQuarter,
  [UnitSuffix.Inch]: picaToInch,
  [UnitSuffix.Pica]: noConvert,
  [UnitSuffix.Point]: picaToPoint,
  [UnitSuffix.REM]: picaToREM,
  [UnitSuffix.EM]: picaToEM,
  [UnitSuffix.ViewWidth]: picaToViewWidth,
  [UnitSuffix.ViewHeight]: picaToViewHeight,
  [UnitSuffix.ViewMin]: picaToViewMin,
  [UnitSuffix.ViewMax]: picaToViewMax,
};
