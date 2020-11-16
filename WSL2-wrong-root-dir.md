
npm start

> bob@1.0.0 start
> pwd ; webpack serve

/mnt/c/Users/martin/test/planet-bob

**********************************
* if running hotloader use
*      http://localhost:8080
*  expect API services on
*      http://localhost:8081
**********************************
ℹ ｢wds｣: Project is running at http://0.0.0.0:8080/
ℹ ｢wds｣: webpack output is served from /assets/
ℹ ｢wds｣: Content not from webpack is served from /mnt/c/Users/martin/test/planet-bob/public
ℹ ｢wds｣: 404s will fallback to public/index.html
ℹ ｢wdm｣: asset vendor.js 2.59 MiB [emitted] (name: vendor) (id hint: commons) 1 related asset
asset main.js 88.7 KiB [emitted] (name: main) 1 related asset
Entrypoint main 2.67 MiB (2.85 MiB) = vendor.js 2.59 MiB main.js 88.7 KiB 2 auxiliary assets
runtime modules 3.85 KiB 7 modules
modules by path ./node_modules/core-js/ 380 KiB 380 modules
modules by path ./node_modules/webpack-dev-server/ 21.2 KiB 12 modules
modules by path ./src/*.js 69.9 KiB 5 modules
modules by path ./node_modules/html-entities/lib/*.js 57.9 KiB 4 modules
modules by path ./node_modules/scheduler/ 31.8 KiB 4 modules
modules by path ./node_modules/webpack/hot/ 1.58 KiB 3 modules
modules by path ./node_modules/url/ 37.4 KiB 3 modules
modules by path ./node_modules/querystring/*.js 4.51 KiB 3 modules
modules by path ./node_modules/react/ 70.6 KiB 2 modules
modules by path ./node_modules/react-dom/ 875 KiB
  ./node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ./node_modules/react-dom/cjs/react-dom.development.js 874 KiB [built] [code generated]
7 modules
webpack 5.4.0 compiled successfully in 11747 ms
ℹ ｢wdm｣: Compiled successfully.
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/DumpStack.log.tmp'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/hiberfil.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/pagefile.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/swapfile.sys'

**Wont see file changes**

----------------------------------------------------------------

## When the current working directory root File System Type is ext4 instead of 9p (Win10 NTFS)

### How to get started

1. Open WindowsTerminal, launching WSL2 Ubunut
```
$ pwd
/mnt/c/Users/martin
```
the default file system is 9p (Win10 NTFS)

```
$ cd                           <----  Important Step (Switches to WSL networked file system and Linux HOME)
$ pwd
/home/mjackson

```
Now the default file system is ext4

npm start

> bob@1.0.0 start
> pwd ; webpack serve

/home/mjackson/test/planet-bob

**********************************
* if running hotloader use
*      http://localhost:8080
*  expect API services on
*      http://localhost:8081
**********************************
ℹ ｢wds｣: Project is running at http://0.0.0.0:8080/
ℹ ｢wds｣: webpack output is served from /assets/
ℹ ｢wds｣: Content not from webpack is served from /home/mjackson/test/planet-bob/public
ℹ ｢wds｣: 404s will fallback to public/index.html
ℹ ｢wdm｣: asset vendor.js 2.59 MiB [emitted] (name: vendor) (id hint: commons) 1 related asset
asset main.js 88.7 KiB [emitted] (name: main) 1 related asset
Entrypoint main 2.67 MiB (2.85 MiB) = vendor.js 2.59 MiB main.js 88.7 KiB 2 auxiliary assets
runtime modules 3.85 KiB 7 modules
modules by path ./node_modules/core-js/ 380 KiB 380 modules
modules by path ./node_modules/webpack-dev-server/ 21.2 KiB 12 modules
modules by path ./src/*.js 69.9 KiB 5 modules
modules by path ./node_modules/html-entities/lib/*.js 57.9 KiB 4 modules
modules by path ./node_modules/scheduler/ 31.8 KiB 4 modules
modules by path ./node_modules/webpack/hot/ 1.58 KiB 3 modules
modules by path ./node_modules/url/ 37.4 KiB 3 modules
modules by path ./node_modules/querystring/*.js 4.51 KiB 3 modules
modules by path ./node_modules/react/ 70.6 KiB 2 modules
modules by path ./node_modules/react-dom/ 875 KiB
  ./node_modules/react-dom/index.js 1.33 KiB [built] [code generated]
  ./node_modules/react-dom/cjs/react-dom.development.js 874 KiB [built] [code generated]
7 modules
webpack 5.4.0 compiled successfully in 2824 ms
ℹ ｢wdm｣: Compiled successfully.
...
**src/ExampleHooks.js modified**
...
ℹ ｢wdm｣: Compiling...
ℹ ｢wdm｣: assets by status 2.59 MiB [cached] 1 asset
asset main.js 88.7 KiB [emitted] (name: main) 1 related asset
Entrypoint main 2.67 MiB (2.85 MiB) = vendor.js 2.59 MiB main.js 88.7 KiB 2 auxiliary assets
cached modules 2.34 MiB [cached] 424 modules
runtime modules 3.85 KiB 7 modules
./src/ExampleHooks.js 3.4 KiB [built] [code generated]
webpack 5.4.0 compiled successfully in 131 ms
ℹ ｢wdm｣: Compiled successfully.


[Microsoft warns about propper way to access files](https://docs.microsoft.com/en-us/windows/wsl/compare-versions)
## For example, when storing your WSL project files:

- Use the Linux file system root directory: \\wsl$\Ubuntu-18.04\home\<user name>\Project
- Not the Windows file system root directory: C:\Users\<user name>\Project

### How to open Win10 File Explorer in your current directory
```
explorer.exe .
```

#### For Example

open WSL2/Ubuntu WindowTerminal

```
$ pwd
/mnt/c/Users/martin            <----   Windows User's HOME
$ cd                           <----  Important Step (Switches to WSL networked file system and Linux HOME)
$ pwd
/home/mjackson
$ cd test/planet-bob
cd
pwd
/home/mjackson/test/planet-bob
explorer.exe .
```
reveals \\wsl$\Ubuntu\home\mjackson\test\planet-bob

## There is a HUGE performance change when webpack thinks the / is \\wsl$\Ubuntu vs. / in /mnt/c/Users

File System Type is everything
```
$ findmnt -n -o FSTYPE -T /
ext4
$ findmnt -n -o FSTYPE -T /mnt/c/
9p
```