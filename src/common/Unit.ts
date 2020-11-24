export abstract class Unit {
  constructor(
    public readonly value: number,
  ) {}

  abstract toString(): string;
}
