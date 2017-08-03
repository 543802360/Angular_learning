# lesson01

Demo地址：

## 安装依赖

```
npm install
## 或者
cnpm install
```

## 本地调试

```
ng serve
```

## 发布

```
ng build

```
或者在package.json 中自定义脚本 "release": "ng build --prod --base-href /demo/ng-lesson01/"  

运行

```
npm run release
```

## 问题
angular/cli 不知哪个版本在build时有个bug，需将版本升级至最新版本，可以使用npm-check包进行依赖包的升级
