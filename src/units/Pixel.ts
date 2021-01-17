import { ConvertibleLengthUnit } from 'common/ConvertibleLengthUnit';
import { Unit } from 'common/Unit';
import { Centimeter } from 'units/Centimeter';
import { Rem } from 'units/Rem';
import { VH } from 'units/VH';
import { VMax } from 'units/VMax';
import { VMin } from 'units/VMin';
import { VW } from 'units/VW';

export class Pixel extends Unit implements Omit<ConvertibleLengthUnit, 'toPixel'> {
  public toString(): string {
    return `${this.value}px`
  }

  public toCentimeter(): Centimeter {
    const centimeter = this.value / (96 / 2.54);
    return new Centimeter(centimeter);
  }

  public toRem(rootFontSize: number): Rem {
    const rem = this.value / rootFontSize;
    return new Rem(rem);
  }

  public toVW(width: number): VW {
    const percentage = (this.value / width) * 100;
    return new VW(percentage);
  }

  public toVH(height: number): VH {
    const percentage = (this.value / height) * 100;
    return new VH(percentage);
  }

  public toVMin(width: number, height: number): VMin {
    const minimum = Math.min(width, height);
    const percentage = (this.value / minimum) * 100;
    return new VMin(percentage);
  }

  public toVMax(width: number, height: number): VMax {
    const maximum = Math.max(width, height);
    const percentage = (this.value / maximum) * 100;
    return new VMax(percentage);
  }
}
