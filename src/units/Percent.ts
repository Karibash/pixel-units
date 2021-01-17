import { ConvertibleMultiplicationUnit } from 'common/ConvertibleMultiplicationUnit';
import { Unit } from 'common/Unit';
import { Magnification } from 'units/Magnification';

export class Percent extends Unit implements Omit<ConvertibleMultiplicationUnit, 'toPercent'> {
  public toString(): string {
    return `${this.value}%`
  }

  public toMagnification(): Magnification {
    const magnification = this.value / 100;
    return new Magnification(magnification);
  }
}
