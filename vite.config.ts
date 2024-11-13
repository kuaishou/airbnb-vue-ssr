import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'

//element 按需引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),],
  define: {
    'process.env': {},
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import url('@/assets/scss/reset.scss')`,
        // additionalData: `$injectedColor: orange;`,
        silenceDeprecations: ['legacy-js-api']
      }
    }
  }
});
