import { UnitSuffix } from '@src/defs';
import { POINT_PIXEL_VALUE } from '@src/internal/constants';
import { UnitConverterOptions, noConvert } from '@src/internal/converters';
import { pixel } from '@src/internal/converters/pixel';

const pointToPixel = (value: number): number => {
  return value * POINT_PIXEL_VALUE;
};

const pointToCentimeter = (value: number): number => {
  return pixel.cm(pointToPixel(value));
};

const pointToMillimeter = (value: number): number => {
  return pixel.mm(pointToPixel(value));
};

const pointToQuarter = (value: number): number => {
  return pixel.Q(pointToPixel(value));
};

const pointToInch = (value: number): number => {
  return pixel.in(pointToPixel(value));
};

const pointToPica = (value: number): number => {
  return pixel.pc(pointToPixel(value));
};

const pointToREM = (value: number, options: UnitConverterOptions): number => {
  return pixel.rem(pointToPixel(value), options);
};

const pointToEM = (value: number, options: UnitConverterOptions): number => {
  return pixel.em(pointToPixel(value), options);
};

const pointToViewWidth = (value: number, options: UnitConverterOptions): number => {
  return pixel.vw(pointToPixel(value), options);
};

const pointToViewHeight = (value: number, options: UnitConverterOptions): number => {
  return pixel.vh(pointToPixel(value), options);
};

const pointToViewMin = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmin(pointToPixel(value), options);
};

const pointToViewMax = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmax(pointToPixel(value), options);
};

export const point = {
  [UnitSuffix.Pixel]: pointToPixel,
  [UnitSuffix.Centimeter]: pointToCentimeter,
  [UnitSuffix.Millimeter]: pointToMillimeter,
  [UnitSuffix.Quarter]: pointToQuarter,
  [UnitSuffix.Inch]: pointToInch,
  [UnitSuffix.Pica]: pointToPica,
  [UnitSuffix.Point]: noConvert,
  [UnitSuffix.REM]: pointToREM,
  [UnitSuffix.EM]: pointToEM,
  [UnitSuffix.ViewWidth]: pointToViewWidth,
  [UnitSuffix.ViewHeight]: pointToViewHeight,
  [UnitSuffix.ViewMin]: pointToViewMin,
  [UnitSuffix.ViewMax]: pointToViewMax,
};
