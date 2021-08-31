import resolve from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

const packageJson = require('../package.json');

const dependencies = Object.keys(packageJson.dependencies || {});
const devDependencies = Object.keys(packageJson.devDependencies || {});
const peerDependencies = Object.keys(packageJson.peerDependencies || {});
const buildDependencies = [...dependencies, ...devDependencies, ...peerDependencies];

export default [
  {
    input: `./dist/index.js`,
    external: buildDependencies,
    output: {
      file: `./dist/index.cjs.js`,
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
      externalLiveBindings: false,
    },
    plugins: [
      resolve(),
    ],
  },
  {
    input: './dist/index.js',
    external: devDependencies,
    output: [
      {
        name: packageJson.name,
        file: `./dist/bundle.js`,
        format: 'umd',
        sourcemap: true,
        exports: 'named',
        externalLiveBindings: false,
      },
      {
        name: packageJson.name,
        file: `./dist/bundle.min.js`,
        format: 'umd',
        sourcemap: true,
        exports: 'named',
        externalLiveBindings: false,
        plugins: [
          terser(),
        ],
      },
    ],
    plugins: [
      resolve(),
    ],
  },
];
