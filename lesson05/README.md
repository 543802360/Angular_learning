# Lesson05

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

---
## 路由
在web开发中，路由是指将 **应用划分成多个分区**，通常是按照从浏览器的URL衍生出来的规则进行分割。  

### 为什么需要路由 
在应用程序中定义路由非常有用，因为我们可以：

- 将应用程序划分为多个分区
- 维护应用程序的状态
- 基于某些规则保护应用分区

### 客户端路由与服务端路由

通常，在服务端负责路由的情况下，收到HTTP请求后，服务器会根据收到的URL来运行相应的控制器。

例如，在Express中，可以这样实现一个最简单的路由：

```

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: '三维可视化平台'
    });
});

module.exports = router;
```
上面的代码当你访问主页时，渲染index.ejs模板。可以认为**服务端路由定义了应用的端点（URIS）以及如何响应客户端的请求**。服务器接收一个请求，并路由到下一个控制器。该控制器根据**路径和参数**执行特定的任务。再来看下面这个例子：

```
/**
 * 地形路由(*.terrain)
 */
//加载依赖模块
var express = require('express');
var router = express.Router();
var terrainService = require('../server/terrainService');

/**
 * 地形服务器
 */
router.get('/terrain', function(req, res, next) {
    res.send('地形服务器正在运行……');
});

/**
 * 获取地形瓦片元数据
 */
router.get('/terrain/layer.json', function(req, res, next) {

    terrainService.getTerrainMetaData(res);

});
/**
 * 
 */
router.get('/terrain/:z/:x/:y', function(req, res, next) {

    var path = req.params.path;
    var z = req.params.z,
        x = req.params.x,
        y = req.params.y.split('.')[0];

    terrainService.getTerrain(z, x, y, res);

});

module.exports = router;
```
上面是一个简单的地形路由，服务端收到客户端发送的地形瓦片请求，这里的控制器就是回调函数，具体的处理包括解析客户端请求、处理客户端请求（包括与后台数据库操作等）、返回结果至客户端等等。 

客户端路由在概念上很相似，但是实施方法不同。在客户端路由情况下，每次URL发生变化时，不一定会向服务器发送请求。我们把Angular应用叫作单页面应用程序（Single Page App，SPA），因为服务器只提供一个页面，负责渲染各种页面的是JavaScript。

在Angular中，我们通过将路径映射到
