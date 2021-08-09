import { Unit, ConvertLengthUnitArgsOptions, convertUnits } from '@karibash/pixel-units';

const convertOptions: ConvertLengthUnitArgsOptions = {
  rem: '16px',
  em: '16px',
  viewHeight: '1920px',
  viewWidth: '1080px',
};

const pixel: Unit<'px'> = '32px';
const rem = convertUnits(pixel, 'rem', convertOptions);

console.log({ pixel, rem });
