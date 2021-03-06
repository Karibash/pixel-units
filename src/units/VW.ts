import { ConvertibleLengthUnit } from 'common/ConvertibleLengthUnit';
import { Unit } from 'common/Unit';
import { Centimeter } from 'units/Centimeter';
import { Pixel } from 'units/Pixel';
import { Rem } from 'units/Rem';
import { VH } from 'units/VH';
import { VMax } from 'units/VMax';
import { VMin } from 'units/VMin';

export class VW extends Unit implements Omit<ConvertibleLengthUnit, 'toVW'> {
  public toString(): string {
    return `${this.value}vw`
  }

  public toCentimeter(width: number): Centimeter {
    const pixel = width * (this.value / 100);
    const centimeter = pixel / (96 / 2.54);
    return new Centimeter(centimeter);
  }

  public toPixel(width: number): Pixel {
    const pixel = width * (this.value / 100);
    return new Pixel(pixel);
  }

  public toRem(width: number, rootFontSize: number): Rem {
    const pixel = width * (this.value / 100);
    const rem = pixel / rootFontSize;
    return new Rem(rem);
  }

  public toVH(width: number, height: number): VH {
    const pixel = width * (this.value / 100);
    const percentage = (pixel / height) * 100;
    return new VH(percentage);
  }

  public toVMin(width: number, height: number): VMin {
    const pixel = width * (this.value / 100);
    const percentage = (pixel / Math.min(width, height)) * 100;
    return new VMin(percentage);
  }

  public toVMax(width: number, height: number): VMax {
    const pixel = width * (this.value / 100);
    const percentage = (pixel / Math.max(width, height)) * 100;
    return new VMax(percentage);
  }
}
