import { Convertible } from 'common/Convertible';
import { Unit } from 'common/Unit';
import { Pixel } from 'units/Pixel';
import { Rem } from 'units/Rem';
import { VH } from 'units/VH';
import { VMax } from 'units/VMax';
import { VMin } from 'units/VMin';

export class VW extends Unit implements Omit<Convertible, 'toVW'> {
  public toString(): string {
    return `${this.value}vw`
  }

  public toPixel(): Pixel {
    return new Pixel(0);
  }

  public toRem(): Rem {
    return new Rem(0);
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
