import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path' // 现在：使用import导入解决错误


export default defineConfig({
  plugins: [vue()],
  define: {
    'process.env': {},
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
