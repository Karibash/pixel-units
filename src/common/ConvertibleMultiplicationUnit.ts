import { Converter } from 'common/Converter';
import { Magnification } from 'units/Magnification';
import { Percent } from 'units/Percent';

export interface ConvertibleMultiplicationUnit {
  toMagnification: Converter<Magnification>
  toPercent: Converter<Percent>;
}
