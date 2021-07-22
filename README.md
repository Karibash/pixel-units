# pixel-units

[![Github](https://img.shields.io/github/followers/Karibash?label=Follow&logo=github&style=social)](https://github.com/Karibash?tab=followers)
[![Twitter](https://img.shields.io/twitter/follow/Karibash?label=Follow&style=social)](https://twitter.com/intent/follow?screen_name=Karibash)

## 🔧 Features

### Absolute length units

- [x] px
- [x] cm
- [x] mm
- [x] Q
- [x] in
- [x] pc
- [x] pt

### Relative length units

- [x] rem
- [x] em
- [x] vw
- [x] vh
- [x] vmin
- [x] vmax

### Multiplication units

- [x] percent
- [x] magnification

## 👏 Getting Started

The basic usage is as follows:

```typescript
import { Unit, convertUnits } from '@karibash/pixel-units';

const pixel: Unit<'px'> = '32px';
const rem = convertUnits(pixel, 'rem');

console.log(rem);
// -> 2rem
```

## 🚀 Installation

```
$ npm install @karibash/pixel-units
```

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

Feel free to check [issues page](https://github.com/Karibash/pixel-units/issues) if you want to contribute.

## 📝 License

Copyright © 2020 [@Karibash](https://twitter.com/karibash).

This project is [```MIT```](https://github.com/Karibash/pixel-units/blob/master/LICENSE) licensed.
