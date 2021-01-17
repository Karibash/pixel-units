import { Converter } from 'common/Converter';
import { Centimeter } from 'units/Centimeter';
import { Pixel } from 'units/Pixel';
import { Rem } from 'units/Rem';
import { VH } from 'units/VH';
import { VMax } from 'units/VMax';
import { VMin } from 'units/VMin';
import { VW } from 'units/VW';

export interface Convertible {
  toCentimeter: Converter<Centimeter>;
  toPixel: Converter<Pixel>;
  toRem: Converter<Rem>;
  toVW: Converter<VW>;
  toVH: Converter<VH>;
  toVMin: Converter<VMin>;
  toVMax: Converter<VMax>;
}
