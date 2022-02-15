import { nodeResolve } from '@rollup/plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'src/index.js',
    plugins: [nodeResolve(), terser()],

    output: {
        dir: 'bin',
        format: 'es',
        entryFileNames: 'sentry.js',
        chunkFileNames: '[name].js',
        minifyInternalExports: false,
        sourcemap: false,
    },

    external: [/node_modules/],
};
