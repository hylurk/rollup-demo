# rollup-demo

> 采用 Rollup 构建的前端项目 Demo

## 安装

下载之后，切换到 `/rollup-demo` 目录，执行安装代码：

````
npm i
````

## 启动

启动此项目，需要在控制台执行以下命令

````
npm run dev
````

## 备注

- rollup 本身更适用于 js 库的打包，如果需要开发 app ，建议采用 webpack 等构建工具

- 目前尚未发现开源的打包图片和字体文件的 rollup 插件，建议真用到 css 的情况，请自己使用 svg 或者手动转为 base64 之后去设置背景和图片

- 引入外部的 js 库，需要在 rollup.config.js 里的 globals 选项里进行注册，否则会报错。本示例中以 jsonp 为例