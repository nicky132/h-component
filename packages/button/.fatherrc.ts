// .fatherrc.ts
// let config = {};
// config = {
//   cjs: {},
//   esm: {},
//   autoprefixer: {
//     browsers: ['ie>9', 'Safari >= 6'],
//   }
// };
// export default config;

import { defineConfig } from 'father';

export default defineConfig({
  // cjs: {
  //   output: 'dist',
  // },
  // esm:{
  //   output: 'dist',
  // },
  umd: {},
  cjs: {},
  esm:{}
});