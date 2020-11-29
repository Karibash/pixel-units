import { Convertible } from 'common/Convertible';
import { Unit } from 'common/Unit';
import { Centimeter } from 'units/Centimeter';
import { Pixel } from 'units/Pixel';
import { Rem } from 'units/Rem';
import { VH } from 'units/VH';
import { VMin } from 'units/VMin';
import { VW } from 'units/VW';

export class VMax extends Unit implements Omit<Convertible, 'toVMax'> {
  public toString(): string {
    return `${this.value}vmax`
  }

  public toCentimeter(width: number, height: number): Centimeter {
    const maximum = Math.max(width, height);
    const pixel = maximum * (this.value / 100);
    const centimeter = pixel / (96 / 2.54);
    return new Centimeter(centimeter);
  }

  public toPixel(width: number, height: number): Pixel {
    const maximum = Math.max(width, height);
    const pixel = maximum * (this.value / 100);
    return new Pixel(pixel);
  }

  public toRem(width: number, height: number, rootFontSize: number): Rem {
    const maximum = Math.max(width, height);
    const pixel = maximum * (this.value / 100);
    const rem = pixel / rootFontSize;
    return new Rem(rem);
  }

  public toVW(width: number, height: number): VW {
    const maximum = Math.max(width, height);
    const pixel = maximum * (this.value / 100);
    const percentage = (pixel / width) * 100;
    return new VW(percentage);
  }

  public toVH(width: number, height: number): VH {
    const maximum = Math.max(width, height);
    const pixel = maximum * (this.value / 100);
    const percentage = (pixel / height) * 100;
    return new VH(percentage);
  }

  public toVMin(width: number, height: number): VMin {
    const maximum = Math.max(width, height);
    const minimum = Math.min(width, height);
    const pixel = maximum * (this.value / 100);
    const percentage = (pixel / minimum) * 100;
    return new VMin(percentage);
  }
}
