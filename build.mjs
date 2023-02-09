import fs from 'node:fs';
import { build } from 'esbuild';

import packageJson from './package.json' assert { type: 'json' };

async function buildModule() {
    const shared = {
        entryPoints: ['source/index.ts'],
        bundle: true,
        minify: true,
        treeShaking: true,
        external: packageJson.dependencies ? Object.keys(packageJson.dependencies) : []
    };

    await build({
        ...shared,
        outfile: 'bundled/commonjs/index.js',
        format: 'cjs'
    });

    await build({
        ...shared,
        outfile: 'bundled/esm/index.esm.js',
        format: 'esm',
    });
}

function generateCommonjsPackageJson() {
    const packageJsonCommonJs = JSON.stringify({ ...packageJson, type: undefined }, null, 2);
    fs.writeFileSync('./bundled/commonjs/package.json', packageJsonCommonJs);
}

await buildModule();
generateCommonjsPackageJson();