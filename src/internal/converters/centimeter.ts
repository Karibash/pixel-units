import { UnitSuffix } from 'defs';
import { CENTIMETER_PIXEL_VALUE } from 'internal/constants';
import { UnitConverterOptions, noConvert } from 'internal/converters';
import { pixel } from 'internal/converters/pixel';

const centimeterToPixel = (value: number): number => {
  return value * CENTIMETER_PIXEL_VALUE;
};

const centimeterToMillimeter = (value: number): number => {
  return pixel.mm(centimeterToPixel(value));
};

const centimeterToQuarter = (value: number): number => {
  return pixel.Q(centimeterToPixel(value));
};

const centimeterToInch = (value: number): number => {
  return pixel.in(centimeterToPixel(value));
};

const centimeterToPica = (value: number): number => {
  return pixel.pc(centimeterToPixel(value));
};

const centimeterToPoint = (value: number): number => {
  return pixel.pt(centimeterToPixel(value));
};

const centimeterToREM = (value: number, options: UnitConverterOptions): number => {
  return pixel.rem(centimeterToPixel(value), options);
};

const centimeterToEM = (value: number, options: UnitConverterOptions): number => {
  return pixel.em(centimeterToPixel(value), options);
};

const centimeterToViewWidth = (value: number, options: UnitConverterOptions): number => {
  return pixel.vw(centimeterToPixel(value), options);
};

const centimeterToViewHeight = (value: number, options: UnitConverterOptions): number => {
  return pixel.vh(centimeterToPixel(value), options);
};

const centimeterToViewMin = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmin(centimeterToPixel(value), options);
};

const centimeterToViewMax = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmax(centimeterToPixel(value), options);
};

export const centimeter = {
  [UnitSuffix.Pixel]: centimeterToPixel,
  [UnitSuffix.Centimeter]: noConvert,
  [UnitSuffix.Millimeter]: centimeterToMillimeter,
  [UnitSuffix.Quarter]: centimeterToQuarter,
  [UnitSuffix.Inch]: centimeterToInch,
  [UnitSuffix.Pica]: centimeterToPica,
  [UnitSuffix.Point]: centimeterToPoint,
  [UnitSuffix.REM]: centimeterToREM,
  [UnitSuffix.EM]: centimeterToEM,
  [UnitSuffix.ViewWidth]: centimeterToViewWidth,
  [UnitSuffix.ViewHeight]: centimeterToViewHeight,
  [UnitSuffix.ViewMin]: centimeterToViewMin,
  [UnitSuffix.ViewMax]: centimeterToViewMax,
};
