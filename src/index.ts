import { ConvertArgs, Unit, UnitSuffix } from 'defs';
import {
  getFontSizePixelValue,
  getViewWidthPixelValue,
  getViewHeightPixelValue,
  converterMap,
} from 'internal';

export * from 'defs';

const UNIT_SPLIT_REGEXP = /^((?:[1-9]\d*|0)(?:\.\d+)?)(px|cm|mm|Q|in|pc|pt|rem|em|vw|vh|vmin|vmax|%|)$/;
export const splitUnitValue = (value: Unit<UnitSuffix>): { value: number, unitSuffix: UnitSuffix } => {
  const split = value.match(UNIT_SPLIT_REGEXP);
  if (split === null || split.length < 3) {
    throw new TypeError('Invalid value for value argument.');
  }
  return {
    value: parseFloat(split[1]),
    unitSuffix: split[2] as UnitSuffix,
  };
};

export const convertUnits = <
  FromUnitValue extends Unit<UnitSuffix>,
  ToUnitSuffix extends UnitSuffix,
>(
  ...[
    fromUnitValue,
    toUnitSuffix,
    options,
  ]: ConvertArgs<FromUnitValue, ToUnitSuffix>
): Unit<ToUnitSuffix> => {
  const { value: fromValue, unitSuffix: fromUnitSuffix } = splitUnitValue(fromUnitValue) ?? {};

  const converters = converterMap[fromUnitSuffix];
  if (converters === undefined) {
    throw new TypeError('Invalid value for fromUnitValue argument.');
  }

  const converter = converters[toUnitSuffix];
  if (converter === undefined) {
    throw new TypeError('Invalid value for toUnitSuffix argument');
  }

  const remPixel = typeof options?.rem === 'string' ? splitUnitValue(options?.rem) : undefined;
  const remElement = options?.rem instanceof Element ? options?.rem : document.documentElement;
  const remPixelValue = remPixel ? remPixel.value : getFontSizePixelValue(remElement);
  if (!remPixelValue) {
    throw new TypeError('Failed to get the font size of the root element. Please run it in the browser environment or specify the default size.');
  }

  const emPixel = typeof options?.em === 'string' ? splitUnitValue(options?.em) : undefined;
  const emElement = options?.em instanceof Element ? options?.em : document.documentElement;
  const emPixelValue = emPixel ? emPixel.value : getFontSizePixelValue(emElement);
  if (!emPixelValue) {
    throw new TypeError('Failed to get the font size of the element. Please run it in the browser environment or specify the default size.');
  }

  const viewWidthPixelValue = options?.viewWidth ?? getViewWidthPixelValue();
  if (!viewWidthPixelValue) {
    throw new TypeError('Failed to get the screen width size. Please run it in the browser environment or specify the default size.');
  }

  const viewHeightPixelValue = options?.viewHeight ?? getViewHeightPixelValue();
  if (!viewHeightPixelValue) {
    throw new TypeError('Failed to get the screen height size. Please run it in the browser environment or specify the default size.');
  }

  const toUnitValue = converter(fromValue, { remPixelValue, emPixelValue, viewWidthPixelValue, viewHeightPixelValue });
  return `${toUnitValue}${toUnitSuffix}` as Unit<ToUnitSuffix>;
};
