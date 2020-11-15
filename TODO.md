

Win10 Version 2004 (OS Build 19041.572)
[] GitBash
[] PowerShell

__GitBash Logs__
cd ~/test
git clone https://github.com/martinjackson/planet-bob.git
cd bob
npm install
npm start
webpack serve
...
webpack 5.4.0 compiled successfully in 3141 ms
...
i ∩╜ówdm∩╜ú: Compiling...
...
./src/ExampleHooks.js 3.4 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 316 ms
i ∩╜ówdm∩╜ú: Compiled successfully.

__PowerShell Logs__
npm start
webpack serve
...
webpack 5.4.0 compiled successfully in 3099 ms
i ｢wdm｣: Compiled successfully.
...
i ｢wdm｣: Compiling...
...
./src/ExampleHooks.js 3.4 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 328 ms
i ｢wdm｣: Compiled successfully.

__WSL2 Ubuntu 20.04 Logs__

 npm start

> bob@1.0.0 start
> webpack serve
...
webpack 5.4.0 compiled successfully in 11786 ms
ℹ ｢wdm｣: Compiled successfully.
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/DumpStack.log.tmp'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/hiberfil.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/pagefile.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/swapfile.sys'
...
[modified src/ExampleHooks.js]
nothing happened
[modified ./constants.js]
nothing happened

npm run watch

> bob@1.0.0 watch
> webpack --watch --progress


**********************************
* if running hotloader use
*      http://localhost:8080
*  expect API services on
*      http://localhost:8081
**********************************
3% setup watch run webpack-cli[webpack-cli] Compilation starting...
99% done plugins webpack-cli[webpack-cli] Compilation finished
2 assets
402 modules
webpack 5.4.0 compiled successfully in 9697 ms
[webpack-cli] watching files for updates...
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/DumpStack.log.tmp'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/hiberfil.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/pagefile.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/swapfile.sys'
...
[modified src/ExampleHooks.js]
nothing happened



https://github.com/webpack/webpack/issues/new?template=Bug_report.md

```
<!-- Please don't delete this template because we'll close your issue -->
<!-- Before creating an issue please make sure you are using the latest version of webpack. -->

# Bug report

<!-- Please ask questions on StackOverflow or the webpack Gitter. -->
<!-- https://stackoverflow.com/questions/ask?tags=webpack -->
<!-- https://gitter.im/webpack/webpack -->
<!-- Issues which contain questions or support requests will be closed. -->

**What is the current behavior?**


**If the current behavior is a bug, please provide the steps to reproduce.**
Win10 Version 2004 (OS Build 19041.572)
WSL2
npm start
webpack serve
...
webpack 5.4.0 compiled successfully in 9375 ms
ℹ ｢wdm｣: Compiled successfully.
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/DumpStack.log.tmp'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/hiberfil.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/pagefile.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/swapfile.sys'

changes to package.json causes rebuilds, changes in src/*.js does not trigger a rebuild.

<!-- A great way to do this is to provide your configuration via a GitHub repository -->
<!-- The most helpful is a minimal reproduction with instructions on how to reproduce -->
<!-- Repositories with too many files or large `webpack.config.js` files are not suitable -->
<!-- Please only add small code snippets directly into this issue -->
<!-- https://gist.github.com is a good place for longer code snippets -->
<!-- If your issue is caused by a plugin or loader, please create an issue on the loader/plugin repository instead -->

**What is the expected behavior?**


<!-- "It should work" is not a helpful explanation -->
<!-- Explain exactly how it should behave -->

**Other relevant information:**
webpack version:
Node.js version:
Operating System:
Additional tools:

```