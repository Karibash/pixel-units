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

  public toPixel(): Pixel {
    return new Pixel(0);
  }

  public toVW(): VW {
    return new VW(0);
  }

  public toVH(): VH {
    return new VH(0);
  }

  public toVMin(): VMin {
    return new VMin(0);
  }

  public toVMax(): VMax {
    return new VMax(0);
  }
}
