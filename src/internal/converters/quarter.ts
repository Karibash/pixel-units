import { UnitSuffix } from '@src/defs';
import { QUARTER_PIXEL_VALUE } from '@src/internal/constants';
import { UnitConverterOptions, noConvert } from '@src/internal/converters';
import { pixel } from '@src/internal/converters/pixel';

const quarterToPixel = (value: number): number => {
  return value * QUARTER_PIXEL_VALUE;
};

const quarterToCentimeter = (value: number): number => {
  return pixel.cm(quarterToPixel(value));
};

const quarterToMillimeter = (value: number): number => {
  return pixel.mm(quarterToPixel(value));
};

const quarterToInch = (value: number): number => {
  return pixel.in(quarterToPixel(value));
};

const quarterToPica = (value: number): number => {
  return pixel.pc(quarterToPixel(value));
};

const quarterToPoint = (value: number): number => {
  return pixel.pt(quarterToPixel(value));
};

const quarterToREM = (value: number, options: UnitConverterOptions): number => {
  return pixel.rem(quarterToPixel(value), options);
};

const quarterToEM = (value: number, options: UnitConverterOptions): number => {
  return pixel.em(quarterToPixel(value), options);
};

const quarterToViewWidth = (value: number, options: UnitConverterOptions): number => {
  return pixel.vw(quarterToPixel(value), options);
};

const quarterToViewHeight = (value: number, options: UnitConverterOptions): number => {
  return pixel.vh(quarterToPixel(value), options);
};

const quarterToViewMin = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmin(quarterToPixel(value), options);
};

const quarterToViewMax = (value: number, options: UnitConverterOptions): number => {
  return pixel.vmax(quarterToPixel(value), options);
};

export const quarter = {
  [UnitSuffix.Pixel]: quarterToPixel,
  [UnitSuffix.Centimeter]: quarterToCentimeter,
  [UnitSuffix.Millimeter]: quarterToMillimeter,
  [UnitSuffix.Quarter]: noConvert,
  [UnitSuffix.Inch]: quarterToInch,
  [UnitSuffix.Pica]: quarterToPica,
  [UnitSuffix.Point]: quarterToPoint,
  [UnitSuffix.REM]: quarterToREM,
  [UnitSuffix.EM]: quarterToEM,
  [UnitSuffix.ViewWidth]: quarterToViewWidth,
  [UnitSuffix.ViewHeight]: quarterToViewHeight,
  [UnitSuffix.ViewMin]: quarterToViewMin,
  [UnitSuffix.ViewMax]: quarterToViewMax,
};
