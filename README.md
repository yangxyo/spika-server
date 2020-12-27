# Spika-server

## 环境安装

安装 mongodb

## 选择端口路径

编辑 src/server/init.js
默认如下：

```
Config.host = "localhost"
Config.port = 8081
Config.urlPrefix = "/spika"
Config.socketNameSpace = "/spika"
```

## 启动项目

```
yarn install
yarn start
```

此时项目前台的两个变量为：

```
VUE_APP_API_BASE_URL=http://后台服务器 IP/spika/v1
VUE_APP_SOCKET_URL=http://后台服务器 IP/spika
```

## 项目文档生成

在根目录的 docs 目录下生成 API 接口文档

```
yarn apidoc
```
