# jbook

[English Version](./README.md)

jbook 是一个在浏览器中运行 JavaScript 和 TypeScript 代码的本地笔记本，体验类似 Jupyter Notebook。它允许在网页中混合编写 Markdown 与代码单元，并实时查看运行结果。本项目已经发布到 npm，可通过一条命令随时创建笔记本。

## 用户运行

1. 确保已安装 [Node.js](https://nodejs.org/)。
2. 在任意目录启动笔记本服务器：

```bash
npx jsnote-sunflower serve notebook.js --port 4005
```

然后在浏览器中打开 <http://localhost:4005>。当前目录下会生成一个 `notebook.js` 文件用于保存单元内容。可通过 `--port` 选项指定其他端口。

## 本地开发

1. 克隆仓库并安装依赖：

```bash
npm install jsnote-sunflower
```

2. 以监听模式启动所有子包：

```bash
npm start
```

此命令通过 Lerna 同时运行本地 API 服务与 React 客户端。开发时客户端运行在 3000 端口，API 监听 4005 端口并代理浏览器请求。

要在 React 客户端包中执行测试：

```bash
cd packages/local-client
npm test
```

## 项目结构

- **packages/cli** – 发布为 `jsnote-sunflower` 的命令行工具。
- **packages/local-api** – 负责加载与保存笔记本文件的 Express 服务。
- **packages/local-client** – 提供笔记本界面的 React 应用。

## 许可证

ISC
