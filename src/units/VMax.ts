import { Convertible } from 'common/Convertible';
import { Unit } from 'common/Unit';
import { Pixel } from 'units/Pixel';
import { Rem } from 'units/Rem';
import { VH } from 'units/VH';
import { VMin } from 'units/VMin';
import { VW } from 'units/VW';

export class VMax extends Unit implements Omit<Convertible, 'toVMax'> {
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

  public toVMin(): VMin {
    return new VMin(0);
  }
}
