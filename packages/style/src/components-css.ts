// Dev/source mode: read raw css (Vite 可以用 ?raw；若非 Vite 则由构建阶段生成 dist/components-css.js)
import buttonRaw from './css/components/button/index.css?raw';
import inputRaw from './css/components/input/index.css?raw';
import cardRaw from './css/components/card/index.css?raw';
import variablesRaw from './css/variables.css?raw';
import shadowRaw from './css/shadow.css?raw';
import menuRaw from './css/components/menu/index.css?raw';

export const buttonCss = buttonRaw;
export const inputCss = inputRaw;
export const cardCss = cardRaw;
export const variablesCss = variablesRaw;
export const shadowCss = shadowRaw;
export const tokensCss = `${variablesRaw}\n${shadowRaw}`;
export const menuCss = menuRaw;
