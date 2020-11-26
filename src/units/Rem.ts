import { Convertible } from 'common/Convertible';
import { Unit } from 'common/Unit';
import { Pixel } from 'units/Pixel';
import { VH } from 'units/VH';
import { VMax } from 'units/VMax';
import { VMin } from 'units/VMin';
import { VW } from 'units/VW';

export class Rem extends Unit implements Omit<Convertible, 'toRem'> {
  public toString(): string {
    return `${this.value}rem`
  }

  public toPixel(rootFontSize: number): Pixel {
    const pixel = this.value * rootFontSize;
    return new Pixel(pixel);
  }

  public toVW(rootFontSize: number, width: number): VW {
    const pixel = this.value * rootFontSize;
    const percentage = (pixel / width) * 100;
    return new VW(percentage);
  }

  public toVH(rootFontSize: number, height: number): VH {
    const pixel = this.value * rootFontSize;
    const percentage = (pixel / height) * 100;
    return new VH(percentage);
  }

  public toVMin(rootFontSize: number, width: number, height: number): VMin {
    const pixel = this.value * rootFontSize;
    const percentage = (pixel / Math.min(width, height)) * 100;
    return new VMin(percentage);
  }

  public toVMax(rootFontSize: number, width: number, height: number): VMax {
    const pixel = this.value * rootFontSize;
    const percentage = (pixel / Math.max(width, height)) * 100;
    return new VMax(percentage);
  }
}
