import { UnitSuffix } from 'defs';
import { MILLIMETER_PIXEL_VALUE } from 'internal/constants';
import { UnitConverterOptions, noConvert } from 'internal/converters';
import { pixel } from 'internal/converters/pixel';

const millimeterToPixel = (value: number): number => {
  return value * MILLIMETER_PIXEL_VALUE;
};

const millimeterToCentimeter = (value: number): number => {
  return pixel.cm(millimeterToPixel(value));
};

const millimeterToQuarter = (value: number): number => {
  return pixel.Q(millimeterToPixel(value));
};

const millimeterToInch = (value: number): number => {
  return pixel.in(millimeterToPixel(value));
};

const millimeterToPica = (value: number): number => {
  return pixel.pc(millimeterToPixel(value));
};

const millimeterToPoint = (value: number): number => {
  return pixel.pt(millimeterToPixel(value));
};

const millimeterToREM = (value: number, options: UnitConverterOptions): number => {
  return pixel.rem(millimeterToPixel(value), options);
};

const millimeterToEM = (value: number, options: UnitConverterOptions): number => {
  return pixel.em(millimeterToPixel(value), options);
};

const millimeterToViewWidth = (value: number, options: UnitConverterOptions): number => {
  return pixel.vw(millimeterToPixel(value), options);
};

const millimeterToViewHeight = (value: number, options: UnitConverterOptions): number => {
  return pixel.vh(millimeterToPixel(value), options);
};

const millimeterToViewMin = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmin(millimeterToPixel(value), options);
};

const millimeterToViewMax = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmax(millimeterToPixel(value), options);
};

export const millimeter = {
  [UnitSuffix.Pixel]: millimeterToPixel,
  [UnitSuffix.Centimeter]: millimeterToCentimeter,
  [UnitSuffix.Millimeter]: noConvert,
  [UnitSuffix.Quarter]: millimeterToQuarter,
  [UnitSuffix.Inch]: millimeterToInch,
  [UnitSuffix.Pica]: millimeterToPica,
  [UnitSuffix.Point]: millimeterToPoint,
  [UnitSuffix.REM]: millimeterToREM,
  [UnitSuffix.EM]: millimeterToEM,
  [UnitSuffix.ViewWidth]: millimeterToViewWidth,
  [UnitSuffix.ViewHeight]: millimeterToViewHeight,
  [UnitSuffix.ViewMin]: millimeterToViewMin,
  [UnitSuffix.ViewMax]: millimeterToViewMax,
};
