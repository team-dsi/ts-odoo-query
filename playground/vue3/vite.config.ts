import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {nodePolyfills} from 'vite-plugin-node-polyfills'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        nodePolyfills({
            globals: {
                Buffer: true, // can also be 'build', 'dev', or false
                global: true,
                process: true,
            },
            protocolImports: true,
        }),
    ],

})
