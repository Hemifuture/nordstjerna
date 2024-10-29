import * as fs from 'fs';
import { globSync } from "node:fs"
import pkg from '../package.json';

const currentVersion = pkg.version;

const packageFiles = globSync('./packages/**/package.json');
packageFiles.forEach((file) => {
  const packageJson = JSON.parse(fs.readFileSync(file).toString());
  packageJson.version = currentVersion;
  fs.writeFileSync(file, JSON.stringify(packageJson, null, 2));
});