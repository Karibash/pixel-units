const AbsoluteLengthUnitSuffix = {
  Pixel: 'px',
  Centimeter: 'cm',
  Millimeter: 'mm',
  Quarter: 'Q',
  Inch: 'in',
  Pica: 'pc',
  Point: 'pt',
} as const;
export type AbsoluteLengthUnitSuffix = typeof AbsoluteLengthUnitSuffix[keyof typeof AbsoluteLengthUnitSuffix];

const RelativeLengthUnitSuffix = {
  REM: 'rem',
  EM: 'em',
  ViewWidth: 'vw',
  ViewHeight: 'vh',
  ViewMin: 'vmin',
  ViewMax: 'vmax',
} as const;
export type RelativeLengthUnitSuffix = typeof RelativeLengthUnitSuffix[keyof typeof RelativeLengthUnitSuffix];

const MultiplicationUnitSuffix = {
  Percent: '%',
  Magnification: '',
} as const;
export type MultiplicationUnitSuffix = typeof MultiplicationUnitSuffix[keyof typeof MultiplicationUnitSuffix];

const LengthUnitSuffix = {
  ...AbsoluteLengthUnitSuffix,
  ...RelativeLengthUnitSuffix,
};
export type LengthUnitSuffix = typeof LengthUnitSuffix[keyof typeof LengthUnitSuffix];

export const UnitSuffix = {
  ...LengthUnitSuffix,
  ...MultiplicationUnitSuffix,
};
export type UnitSuffix = typeof UnitSuffix[keyof typeof UnitSuffix];

export type Unit<Suffix extends UnitSuffix> = `${number}${Suffix}`;

export type ConvertLengthUnitArgsOptions = {
  rem?: Element | Unit<'px'>;
  em?: Element | Unit<'px'>;
  viewWidth?: Unit<'px'>;
  viewHeight?: Unit<'px'>;
};

export type ConvertLengthUnitArgs<
  FromUnitValue extends Unit<LengthUnitSuffix>,
  ToUnitSuffix extends LengthUnitSuffix,
  > = [
  fromUnitValue: FromUnitValue,
  toUnitSuffix: ToUnitSuffix,
  options?: ConvertLengthUnitArgsOptions,
];

export type ConvertMultiplicationUnitArgs<
  FromUnitValue extends Unit<MultiplicationUnitSuffix>,
  ToUnitSuffix extends MultiplicationUnitSuffix,
  > = [
  fromUnitValue: FromUnitValue,
  toUnitSuffix: ToUnitSuffix,
];

export type ConvertArgs<FromUnitValue, ToUnitSuffix> =
  FromUnitValue extends Unit<LengthUnitSuffix>
    ? ToUnitSuffix extends LengthUnitSuffix
      ? ConvertLengthUnitArgs<FromUnitValue, ToUnitSuffix>
      : never
    : FromUnitValue extends Unit<MultiplicationUnitSuffix>
      ? ToUnitSuffix extends MultiplicationUnitSuffix
        ? ConvertMultiplicationUnitArgs<FromUnitValue, ToUnitSuffix>
        : never
      : never
