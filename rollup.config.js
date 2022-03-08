import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: 'src/index.js',
    plugins: [nodeResolve()],

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
