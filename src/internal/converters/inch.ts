import { UnitSuffix } from 'defs';
import { INCH_PIXEL_VALUE } from 'internal/constants';
import { UnitConverterOptions, noConvert } from 'internal/converters';
import { pixel } from 'internal/converters/pixel';

const inchToPixel = (value: number): number => {
  return value * INCH_PIXEL_VALUE;
};

const inchToCentimeter = (value: number): number => {
  return pixel.cm(inchToPixel(value));
};

const inchToMillimeter = (value: number): number => {
  return pixel.mm(inchToPixel(value));
};

const inchToQuarter = (value: number): number => {
  return pixel.Q(inchToPixel(value));
};

const inchToPica = (value: number): number => {
  return pixel.pc(inchToPixel(value));
};

const inchToPoint = (value: number): number => {
  return pixel.pt(inchToPixel(value));
};

const inchToREM = (value: number, options: UnitConverterOptions): number => {
  return pixel.rem(inchToPixel(value), options);
};

const inchToEM = (value: number, options: UnitConverterOptions): number => {
  return pixel.em(inchToPixel(value), options);
};

const inchToViewWidth = (value: number, options: UnitConverterOptions): number => {
  return pixel.vw(inchToPixel(value), options);
};

const inchToViewHeight = (value: number, options: UnitConverterOptions): number => {
  return pixel.vh(inchToPixel(value), options);
};

const inchToViewMin = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmin(inchToPixel(value), options);
};

const inchToViewMax = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmax(inchToPixel(value), options);
};

export const inch = {
  [UnitSuffix.Pixel]: inchToPixel,
  [UnitSuffix.Centimeter]: inchToCentimeter,
  [UnitSuffix.Millimeter]: inchToMillimeter,
  [UnitSuffix.Quarter]: inchToQuarter,
  [UnitSuffix.Inch]: noConvert,
  [UnitSuffix.Pica]: inchToPica,
  [UnitSuffix.Point]: inchToPoint,
  [UnitSuffix.REM]: inchToREM,
  [UnitSuffix.EM]: inchToEM,
  [UnitSuffix.ViewWidth]: inchToViewWidth,
  [UnitSuffix.ViewHeight]: inchToViewHeight,
  [UnitSuffix.ViewMin]: inchToViewMin,
  [UnitSuffix.ViewMax]: inchToViewMax,
};
