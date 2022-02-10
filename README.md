
### 这是基于react技术栈，通过npm init一个干净的项目，并配置一个最基本的webpack配置，创建项目发布到npm的组件库

## package.json字段含义
1. name包名，若npm中已有包名，需修改包名，否则publish到npm会失败
2. version版本号，每次发布版本前都需要递增修改版本号
3. description包的简介
4. 是否私有，发布到npm一定要设置为false
5. main项目入口（代码通过webpack打包编译后的output出口文件名）
6. directorities描述模块的结构
7. scripts执行脚本，可以在这里添加自定义的执行脚本（此项目添加了lib命令，执行此命令时会将要发布到npm的代码通过指定的webpack文件编译，每次要发布版本都需要执行lib命令）
8. registory仓库地址，设置代码所在仓库地址
9. keywords关键字，设置仓库的关键字，方便检索
10. author作者，可以输入作者名称
11. license许可协议
12. bugs提交地址
13. homepage项目主页
14. devDependencies开发环境依赖包记录

## 发布到npm
1. 修改version版本号，npm发布版本时，向上叠加（v0.0.1->v0.0.2)。发布前不修改版本号会报错
2. 执行npm login 登录npm账号（需要先在官网注册npm账号）
3. 执行npm publish 发布最新版本。（先对代码进行编译）





