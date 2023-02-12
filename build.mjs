import fs from 'node:fs';
import { build } from 'esbuild';

import packageJson from './package.json' assert { type: 'json' };

function getExternalDependencies(allow = []) {
    const deps = packageJson.dependencies ? Object.keys(packageJson.dependencies).filter(dep => !allow.includes(dep)) : [];
    const peerDeps = packageJson.peerDependencies ? Object.keys(packageJson.peerDependencies).filter(dep => !allow.includes(dep)) : [];
    return [...deps, ...peerDeps];
}

async function buildModule() {
    const shared = {
        platform: 'node',
        entryPoints: ['source/index.ts'],
        bundle: true,
        minify: true,
        treeShaking: true,

    };

    await build({
        ...shared,
        outfile: 'bundled/commonjs/index.js',
        format: 'cjs',
        external: getExternalDependencies(['chalk'])
    });

    await build({
        ...shared,
        outfile: 'bundled/esm/index.esm.js',
        format: 'esm',
        external: getExternalDependencies([])
    });
}

function generateCommonjsPackageJson() {
    const packageJsonCommonJs = JSON.stringify({ ...packageJson, type: undefined }, null, 2);
    fs.writeFileSync('./bundled/commonjs/package.json', packageJsonCommonJs);
}

await buildModule();
generateCommonjsPackageJson();