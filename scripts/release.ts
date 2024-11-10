import * as fs from 'fs';
import { globSync } from "node:fs";
import pkg from '../package.json' with { type: 'json' };
import { execSync } from 'node:child_process';
import path from 'path';

const execCommand = (command: string, options = {}) => {
  try {
    execSync(command, { stdio: 'inherit', ...options });
  } catch (error) {
    console.error(`Error executing command: ${command}`, error);
    process.exit(1);
  }
};

execCommand('npm login --registry=https://registry.npmjs.org/');

const currentVersion = pkg.version;
const packageFiles = globSync('./packages/*/package.json');
const currentDir = process.cwd();

packageFiles.forEach((file) => {
  console.log('Releasing package:', file);
  const packageJson = JSON.parse(fs.readFileSync(file).toString());
  packageJson.version = currentVersion;
  fs.writeFileSync(file, JSON.stringify(packageJson, null, 2));

  const dir = path.dirname(file);
  process.chdir(dir);

  execCommand('npm run build');
  execCommand(`git tag v${currentVersion}`);
  execCommand('git push --tags');
  execCommand('npm publish');

  process.chdir(currentDir);
});