import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'



// https://vitejs.dev/config/
export default defineConfig({
  
  // publicPath: './src',
  base: './',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  // build打包构建配置
  build: {
    publicPath: './',
    // 打包输出的文件夹名称
    outDir: 'dist',
    // 静态资源文件保存的文件夹名称
    assetsDir: 'static',
    // 是否启用css代码拆分
    cssCodeSplit: true,
    // 打包构建后是否生成 source map 文件。
    sourcemap: true,
    // 打包构建时压缩混淆使用的混淆器
    minify: 'esbuild',
    // 自定义底层的 Rollup 打包配置（Rollup文档地址：https://cn.rollupjs.org/configuration-options/）
    rollupOptions: {
      // 输出配置
      output: {
        // 输出的文件自定义命名
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNamesL: '[ext]/[name]-[hash].[text]'
      }
    }
  }
})
