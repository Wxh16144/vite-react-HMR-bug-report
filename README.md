# Bug Description

React 项目使用 less css module 文件更新后 Dom 样式未更新 [vitejs/vite/issues/12729](https://github.com/vitejs/vite/issues/12729)

### 目录描述

我往这个仓库推送了两个分支 [vitejs](https://github.com/Wxh16144/vite-react-HMR-bug-report/tree/nextjs) 和 [nextjs](https://github.com/Wxh16144/vite-react-HMR-bug-report/tree/nextjs) 以方便开发者/维护者复现。他们两均有一个 `sheard/components/Test` 目录，并且逻辑是一样的。

### 问题描述

我在 vite 启动的项目中无法实现修改 `.module.less` 文件实现热更新。 具体表现为 less 文件修改了, 并且 head 标签正确的插入了样式。但是 Dom 上的 className 未更新。我不确定是 react-plugin 的问题还是 vite 的问题。所以希望团队可以帮忙看看，提前感谢~

### 期望

和 nextjs 启动的 Demo 行为表现一致。

### 实际

vite 项目中没有更新 dom 样式。

### Bug 预览

| nextjs(expected) | vite( actually happening) |
| --- | --- |
| <video src="https://user-images.githubusercontent.com/32004925/229674900-2b698a7b-047e-4784-ae1d-97ccd5d51ba2.mp4" data-canonical-src="https://user-images.githubusercontent.com/32004925/229674900-2b698a7b-047e-4784-ae1d-97ccd5d51ba2.mp4" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit" style="max-height:640px; min-height: 200px"> | <video src="https://user-images.githubusercontent.com/32004925/229674880-1018905e-c1da-4e9a-af9b-22ea61654bd2.mp4" data-canonical-src="https://user-images.githubusercontent.com/32004925/229674880-1018905e-c1da-4e9a-af9b-22ea61654bd2.mp4" controls="controls" muted="muted" class="d-block rounded-bottom-2 border-top width-fit" style="max-height:640px; min-height: 200px">


### 设备

```bash
System:
    OS: macOS 13.2.1
    CPU: (10) arm64 Apple M1 Pro
    Memory: 102.91 MB / 32.00 GB
    Shell: 5.8.1 - /bin/zsh
  Binaries:
    Node: 16.19.1 - ~/.nvm/versions/node/v16.19.1/bin/node
    Yarn: 1.22.19 - ~/.nvm/versions/node/v16.19.1/bin/yarn
    npm: 8.19.3 - ~/.nvm/versions/node/v16.19.1/bin/npm
    Watchman: 2023.03.27.00 - /opt/homebrew/bin/watchman
  Browsers:
    Chrome: 111.0.5563.146
    Safari: 16.3
```

### 依赖

#### nextjs

```bash
test-less-module-hmr-next on  nextjs [!] is 📦 v0.1.0 via ⬢ v16.19.1 
➜ npm ls                              
test-less-module-hmr-next@0.1.0 /Users/wuxh/Code/Playground/test-less-module-hmr-next
├── @types/node@18.15.11
├── @types/react-dom@18.0.11
├── @types/react@18.0.33
├── next-plugin-antd-less@1.8.0
├── next@13.2.4
├── react-dom@18.2.0
├── react@18.2.0
└── typescript@5.0.3
```

#### vitejs

```bash
test-less-module-hmr on  vitejs [!] is 📦 v0.0.0 via ⬢ v16.19.1 
➜ pnpm list
Legend: production dependency, optional only, dev only

test-less-module-hmr@0.0.0 /Users/wuxh/Code/Playground/test-less-module-hmr (PRIVATE)

dependencies:
react 18.2.0
react-dom 18.2.0

devDependencies:
@types/react 18.0.33
@types/react-dom 18.0.11
@vitejs/plugin-react 3.1.0
less 4.1.3
typescript 4.9.5
vite 4.2.1
```
