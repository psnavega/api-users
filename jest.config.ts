/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https:
 */

const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest')

 
export default {
  clearMocks: true,
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, { prefix: '<rootDir>'}),
  preset: 'ts-jest',
};
