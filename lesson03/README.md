# lesson03

Angular 2 表单

Demo地址：[https://543802360.github.io/demo/ng-lesson03/index.html](https://543802360.github.io/demo/ng-lesson03/index.html)

## install dependencies

```
npm install
## 或者
cnpm install
```

## debug

```
ng serve
```

## build

```
ng build

```
或者在package.json 中自定义脚本 "release": "ng build --prod --base-href /demo/ng-lesson03/"  

运行

```
npm run release
```

## 问题
angular/cli 不知哪个版本在build时有个bug，需将版本升级至最新版本，可以使用npm-check包进行依赖包的升级
