import { ConvertibleLengthUnit } from 'common/ConvertibleLengthUnit';
import { Unit } from 'common/Unit';
import { Centimeter } from 'units/Centimeter';
import { Pixel } from 'units/Pixel';
import { Rem } from 'units/Rem';
import { VH } from 'units/VH';
import { VMax } from 'units/VMax';
import { VW } from 'units/VW';

export class VMin extends Unit implements Omit<ConvertibleLengthUnit, 'toVMin'> {
  public toString(): string {
    return `${this.value}vmin`
  }

  public toCentimeter(width: number, height: number): Centimeter {
    const minimum = Math.min(width, height);
    const pixel = minimum * (this.value / 100);
    const centimeter = pixel / (96 / 2.54);
    return new Centimeter(centimeter);
  }

  public toPixel(width: number, height: number): Pixel {
    const minimum = Math.min(width, height);
    const pixel = minimum * (this.value / 100);
    return new Pixel(pixel);
  }

  public toRem(width: number, height: number, rootFontSize: number): Rem {
    const minimum = Math.min(width, height);
    const pixel = minimum * (this.value / 100);
    const rem = pixel / rootFontSize;
    return new Rem(rem);
  }

  public toVW(width: number, height: number): VW {
    const minimum = Math.min(width, height);
    const pixel = minimum * (this.value / 100);
    const percentage = (pixel / width) * 100;
    return new VW(percentage);
  }

  public toVH(width: number, height: number): VH {
    const minimum = Math.min(width, height);
    const pixel = minimum * (this.value / 100);
    const percentage = (pixel / height) * 100;
    return new VH(percentage);
  }

  public toVMax(width: number, height: number): VMax {
    const maximum = Math.max(width, height);
    const minimum = Math.min(width, height);
    const pixel = minimum * (this.value / 100);
    const percentage = (pixel / maximum) * 100;
    return new VMax(percentage);
  }
}
