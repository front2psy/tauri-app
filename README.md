# tauri项目

### 环境准备
1. 安装rust  
  1.1 `windows` 中需要额外安装 `webview2`  
  1.2 `macOs` 中需要先执行 `xcode-select --install`

2. 更新和卸载  
  2.1 更新`cargo update` `rustup upgrade`  
  2.2 卸载 `rustup self uninstall`  
  2.3 `rustc --version`

3. 创建项目  
  3.1 初始化
  ```
  npm create tauri-app
  ```

4. 启动项目  
  4.1 启动`web`项目`npm run dev`  
  4.2 启动`tauri`项目 `npm tauri dev`  
  4.3 构建应用 `npm tauri build`, 需要修改`src-tauri/tauri.conf.json`中的 `identifier`，构建完成后，在 `src-tauri/target/release/bundle/{platform}/{app}`找到对应的应用程序安装包  
  4.4. 检查环境信息 `npm tauri info` 
  
5. 集成 `WebAssembly`  
  >> 5.1 安装依赖 `wasm-pack` `vite-plugin-rsw`
  ```
    npm install vite-plugin-rsw -D

    1. 编辑vite.config.js
    import { defineConfig } from 'vite'
    import { ViteRsw } from 'vite-plugin-rsw'

    export default defineConfig({
      plugins: [ViteRsw()]
    })

    2. 编辑 package.json

    {
      "scripts": {
        "dev": "vite",
        "build": "rsw build && tsc && vite build",
        "preview": "vite preview",
        "tauri": "tauri",
        "rsw": "rsw"
      }
    }

    cargo install rsw
  ```  
  >> 5.2 开发模式  
  5.2.1 监听wasm内容变化 `npm run rsw watch`  
  5.2.2 新开一个命令窗口：浏览器环境 `npm run dev` 和 tauri 环境 `npm run tauri dev`  
  5.2.3 构建 
  5.2.3.1 构建`wasm`： `npm run rsw build`  
  5.2.3.2 构建`web`：`npm run build`  
  5.2.3.3 构建`tauri`：`npm run tauri build`

6. 平台编译，Tauri在本地只能编译成当前平台对应的包，若要编译其他环境的包，需要添加CI/CD处理


