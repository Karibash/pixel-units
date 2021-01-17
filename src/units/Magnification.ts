import { ConvertibleMultiplicationUnit } from 'common/ConvertibleMultiplicationUnit';
import { Unit } from 'common/Unit';
import { Percent } from 'units/Percent';

export class Magnification extends Unit implements Omit<ConvertibleMultiplicationUnit, 'toMagnification'> {
  public toString(): string {
    return `${this.value}`;
  }

  public toPercent(): Percent {
    const percent = this.value * 100;
    return new Percent(percent);
  }
}
