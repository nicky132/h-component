// .fatherrc.ts

import { readdirSync } from 'fs';
import { join } from 'path';
// utils must build before core
// runtime must build before renderer-react
// components dependencies order: form -> table -> list
const headPkgs: string[] = ['button']; // 这里改为自己需要打包的包名
const tailPkgs = readdirSync(join(__dirname, 'packages')).filter(
  (pkg) => pkg.charAt(0) !== '.' && !headPkgs.includes(pkg),
);

const type = process.env.BUILD_TYPE;
let config = {};

if (type === 'lib') {
  config = {
    cjs: {},
    esm: false,
    // 这里改为false, 不然npm run build会报@babel/runtime dependency is required to use runtimeHelpers 的错误
    // runtimeHelpers: false, 
    // pkgs: [...headPkgs, ...tailPkgs],
    extraBabelPlugins: [
      ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
    ],
  };
}

if (type === 'es') {
  config = {
    cjs: false,
    esm: {},
    // 这里改为false, 不然npm run build会报@babel/runtime dependency is required to use runtimeHelpers 的错误
    // runtimeHelpers: false,
    // pkgs: [...headPkgs, ...tailPkgs],
    // extraBabelPlugins: [
    //   [require('./scripts/replaceLib')],
    //   ['babel-plugin-import', { libraryName: 'antd', libraryDirectory: 'es', style: true }, 'antd'],
    // ],
    // cssModules: true,
    // extractCSS: false,
    // lessInBabelMode: true,
    // entry: ['packages/button/src/index.tsx', 'packages/tag/src/index.tsx'],
    autoprefixer: {
      browsers: ['ie>9', 'Safari >= 6'],
    }
  };
}

export default config;