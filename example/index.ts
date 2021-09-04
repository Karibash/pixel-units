import { Unit, convertUnits } from '@karibash/pixel-units';

const pixel: Unit<'px'> = '32px';
const rem = convertUnits(pixel, 'rem', { rem: '16px' });

console.log({ pixel, rem });
