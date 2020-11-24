import { Convertible } from 'common/Convertible';
import { Unit } from 'common/Unit';
import { Pixel } from 'units/Pixel';
import { Rem } from 'units/Rem';
import { VMax } from 'units/VMax';
import { VMin } from 'units/VMin';
import { VW } from 'units/VW';

export class VH extends Unit implements Omit<Convertible, 'toVH'> {
  public toString(): string {
    return `${this.value}vh`
  }

  public toPixel(): Pixel {
    return new Pixel(0);
  }

  public toRem(): Rem {
    return new Rem(0);
  }

  public toVW(): VW {
    return new VW(0);
  }

  public toVMin(): VMin {
    return new VMin(0);
  }

  public toVMax(): VMax {
    return new VMax(0);
  }
}
