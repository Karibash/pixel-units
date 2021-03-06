import { ConvertibleLengthUnit } from 'common/ConvertibleLengthUnit';
import { Unit } from 'common/Unit';
import { Centimeter } from 'units/Centimeter';
import { Pixel } from 'units/Pixel';
import { Rem } from 'units/Rem';
import { VMax } from 'units/VMax';
import { VMin } from 'units/VMin';
import { VW } from 'units/VW';

export class VH extends Unit implements Omit<ConvertibleLengthUnit, 'toVH'> {
  public toString(): string {
    return `${this.value}vh`
  }

  public toCentimeter(height: number): Centimeter {
    const pixel = height * (this.value / 100);
    const centimeter = pixel / (96 / 2.54);
    return new Centimeter(centimeter);
  }

  public toPixel(height: number): Pixel {
    const pixel = height * (this.value / 100);
    return new Pixel(pixel);
  }

  public toRem(height: number, rootFontSize: number): Rem {
    const pixel = height * (this.value / 100);
    const rem = pixel / rootFontSize;
    return new Rem(rem);
  }

  public toVW(height: number, width: number): VW {
    const pixel = height * (this.value / 100);
    const percentage = (pixel / width) * 100;
    return new VW(percentage);
  }

  public toVMin(height: number, width: number): VMin {
    const pixel = height * (this.value / 100);
    const percentage = (pixel / Math.min(width, height)) * 100;
    return new VMin(percentage);
  }

  public toVMax(height: number, width: number): VMax {
    const pixel = height * (this.value / 100);
    const percentage = (pixel / Math.max(width, height)) * 100;
    return new VMax(percentage);
  }
}
