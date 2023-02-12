import type { Config } from '@jest/types';
import { pathsToModuleNameMapper } from 'ts-jest';
import tsconfigJson from './tsconfig.json';

function manageKey(key: string): string {
    return key.includes('(.*)') ? key.slice(0, -1) + '\\.js$' : key;
}
function manageMapper(mapper: Record<string, string>): Record<string, string> {
    const newMapper: Record<string, string> = {};
    for (const key in mapper) {
        newMapper[manageKey(key)] = mapper[key];
    }
    newMapper['^(.*)\\.js$'] = '$1';
    return newMapper;
}

function getNodeModulesWithESMPatternsToTransform(modules: string[]): Record<string, string> {
    return modules.reduce((acc, module) => ({
        ...acc,
        [`node_modules/${module}/.+\\.(j|t)sx?$`]: 'jest-esm-transformer-2'
    }), {});
};
function getNodeModulesWithESMTransformIgnorePattern(modules: string[]): string {
    return `<rootDir>/node_modules/${modules.map(module => `(?!${module}/.*)`).join('')}`;
}

const nodeModulesWithESM = ['chalk'];

const config: Config.InitialOptions = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'node',
    verbose: true,
    transform: {
        '^.+\\.tsx?$': ['ts-jest', {
            tsconfig: './tsconfig.json',
            useEsm: true
        }],
        ...getNodeModulesWithESMPatternsToTransform(nodeModulesWithESM)
    },
    coverageProvider: 'v8',
    moduleNameMapper: manageMapper(pathsToModuleNameMapper(tsconfigJson.compilerOptions.paths, { prefix: '<rootDir>/' }) as Record<string, string>),
    transformIgnorePatterns: [ getNodeModulesWithESMTransformIgnorePattern(nodeModulesWithESM)]
};
export default config;