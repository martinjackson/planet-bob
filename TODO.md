
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