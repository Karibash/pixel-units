import { Convertible } from 'common/Convertible';
import { Unit } from 'common/Unit';
import { Pixel } from 'units/Pixel';
import { Rem } from 'units/Rem';
import { VH } from 'units/VH';
import { VMax } from 'units/VMax';
import { VMin } from 'units/VMin';
import { VW } from 'units/VW';

export class Centimeter extends Unit implements Omit<Convertible, 'toCentimeter'> {
  public toString(): string {
    return `${this.value}cm`
  }

  public toPixel(): Pixel {
    const pixel = this.value * (96 / 2.54);
    return new Pixel(pixel);
  }

  public toRem(rootFontSize: number): Rem {
    const pixel = this.value * (96 / 2.54);
    const rem = pixel / rootFontSize;
    return new Rem(rem);
  }

  public toVW(width: number): VW {
    const pixel = this.value * (96 / 2.54);
    const percentage = (pixel / width) * 100;
    return new VW(percentage);
  }

  public toVH(height: number): VH {
    const pixel = this.value * (96 / 2.54);
    const percentage = (pixel / height) * 100;
    return new VH(percentage);
  }

  public toVMin(width: number, height: number): VMin {
    const minimum = Math.min(width, height);
    const pixel = this.value * (96 / 2.54);
    const percentage = (pixel / minimum) * 100;
    return new VMin(percentage);
  }

  public toVMax(width: number, height: number): VMax {
    const maximum = Math.max(width, height);
    const pixel = this.value * (96 / 2.54);
    const percentage = (pixel / maximum) * 100;
    return new VMax(percentage);
  }
}
