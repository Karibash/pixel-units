import { Convertible } from 'common/Convertible';
import { Unit } from 'common/Unit';
import { Pixel } from 'units/Pixel';
import { Rem } from 'units/Rem';
import { VH } from 'units/VH';
import { VMax } from 'units/VMax';
import { VW } from 'units/VW';

export class VMin extends Unit implements Omit<Convertible, 'toVMin'> {
  public toString(): string {
    return `${this.value}vmin`
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

  public toVH(): VH {
    return new VH(0);
  }

  public toVMax(): VMax {
    return new VMax(0);
  }
}