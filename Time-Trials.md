
# Bundler Time Trails

##  Git-Bash

### Prep
```
 npm install -g npm@7
$ npm -v
7.0.12

$ node -v
v14.15.0

npx create-simple-react new-dir


$ cd
$ mkdir test
$ cd test
$ git clone https://github.com/martinjackson/planet-bob.git
$ cd planet-bob/
$ npm install
$ pwd
/c/Users/martin/test/planet-bob
$ npm start
```

C:\Users\martin\test\planet-bob

webpack 5.4.0 compiled successfully in 3116 ms
webpack 5.4.0 compiled successfully in 322 ms
webpack 5.4.0 compiled successfully in 116 ms
webpack 5.4.0 compiled successfully in 187 ms
webpack 5.4.0 compiled successfully in 294 ms
webpack 5.4.0 compiled successfully in 112 ms
------------------------------------------------------------------------------
webpack 5.4.0 compiled successfully in 3108 ms
webpack 5.4.0 compiled successfully in 325 ms
webpack 5.4.0 compiled successfully in 109 ms
webpack 5.4.0 compiled successfully in 110 ms
webpack 5.4.0 compiled successfully in 213 ms
webpack 5.4.0 compiled successfully in 117 ms
------------------------------------------------------------------------------
webpack 5.4.0 compiled successfully in 3113 ms
webpack 5.4.0 compiled successfully in 133 ms
webpack 5.4.0 compiled successfully in 73 ms
webpack 5.4.0 compiled successfully in 88 ms
webpack 5.4.0 compiled successfully in 97 ms
webpack 5.4.0 compiled successfully in 68 ms
------------------------------------------------------------------------------


##  Power Shell

### Prep
```
PS C:\Users\martin> npm -v
7.0.12

PS C:\Users\martin> node -v
v14.15.0


PS C:\Users\martin> mkdir test
PS C:\Users\martin> cd test
PS C:\Users\martin\test> git clone https://github.com/martinjackson/planet-bob.git
PS C:\Users\martin\test> cd planet-bob/
PS C:\Users\martin\test\planet-bob> npm install
PS C:\Users\martin\test\planet-bob> pwd
Path
----
C:\Users\martin\test\planet-bob
PS C:\Users\martin\test\planet-bob>  npm start
```

PS C:\Users\martin\test\planet-bob> npm start

> bob@1.0.0 start
> webpack serve

C:\Users\martin\test\planet-bob

webpack 5.4.0 compiled successfully in 3131 ms
webpack 5.4.0 compiled successfully in 347 ms
webpack 5.4.0 compiled successfully in 112 ms
webpack 5.4.0 compiled successfully in 104 ms
webpack 5.4.0 compiled successfully in 111 ms
webpack 5.4.0 compiled successfully in 86 ms
-----------------------------------------------------------
webpack 5.4.0 compiled successfully in 3102 ms
webpack 5.4.0 compiled successfully in 135 ms
webpack 5.4.0 compiled successfully in 79 ms
webpack 5.4.0 compiled successfully in 81 ms
webpack 5.4.0 compiled successfully in 76 ms
webpack 5.4.0 compiled successfully in 66 ms
-----------------------------------------------------------
webpack 5.4.0 compiled successfully in 3094 ms
webpack 5.4.0 compiled successfully in 145 ms
webpack 5.4.0 compiled successfully in 79 ms
webpack 5.4.0 compiled successfully in 85 ms
webpack 5.4.0 compiled successfully in 143 ms
webpack 5.4.0 compiled successfully in 104 ms

##  WSL2 Ubuntu 20.04 (on Win10 file system)

### Prep
```
sudo npm install -g npm@7
$ npm -v
7.0.12

$ node -v
v14.15.0

$ cd /mnt/c/Users/martin/test/planet-bob
$ npm install
$ pwd
/mnt/c/Users/martin/test/planet-bob
$ npm start
```

```
 test/planet-bob   main ±  npm start

> bob@1.0.0 start
> webpack serve

/mnt/c/Users/martin/test/planet-bob
PROBLEM: Win10 file system accessed from WSL.
WARNING: Initial build will be 6x-8x SLOWER !!!
ERROR: programs watching for file changes will not be notified!
       webpack serve      affected
       webpack --watch    affected
       webpack            Initial build: 6x-8x SLOWER
SOLUTION: access project through Linux file system.
SOLUTION: cd ~/path/to/project (not cd /mnt/c/path/to/project)
npm ERR! code 255
npm ERR! path /mnt/c/Users/martin/test/planet-bob
npm ERR! command failed
npm ERR! command sh -c webpack serve

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/mjackson/.npm/_logs/2020-11-18T20_20_17_121Z-debug.log
 ✘  test/planet-bob   main ± 
 ```

 ```
 /mnt/c/Users/martin/test/planet-bob
 webpack 5.4.0 compiled successfully in 14404 ms
ℹ ｢wdm｣: Compiled successfully.
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/DumpStack.log.tmp'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/hiberfil.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/pagefile.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/swapfile.sys'
 ```

 ```
/mnt/c/Users/martin/test/planet-bob
webpack 5.4.0 compiled successfully in 10075 ms
ℹ ｢wdm｣: Compiled successfully.
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/DumpStack.log.tmp'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/hiberfil.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/pagefile.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/swapfile.sys'
webpack 5.4.0 compiled successfully in 322 ms
webpack 5.4.0 compiled successfully in 216 ms
webpack 5.4.0 compiled successfully in 111 ms
webpack 5.4.0 compiled successfully in 243 ms
webpack 5.4.0 compiled successfully in 122 ms
 ```

 ```
 /mnt/c/Users/martin/test/planet-bob
webpack 5.4.0 compiled successfully in 9844 ms
ℹ ｢wdm｣: Compiled successfully.
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/DumpStack.log.tmp'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/hiberfil.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/pagefile.sys'
Watchpack Error (initial scan): Error: EACCES: permission denied, lstat '/mnt/c/swapfile.sys'

webpack 5.4.0 compiled successfully in 331 ms
webpack 5.4.0 compiled successfully in 108 ms
webpack 5.4.0 compiled successfully in 109 ms
webpack 5.4.0 compiled successfully in 104 ms
 ```

##  WSL2 Ubuntu 20.04 (on Linux VM file system)

### Prep
```
sudo npm install -g npm@7
$ npm -v
7.0.12

$ node -v
v14.15.0

$ cd
$ mkdir test
$ cd test
$ git clone https://github.com/martinjackson/planet-bob.git
$ cd planet-bob/
$ npm install
$ pwd
/home/mjackson/test/planet-bob
$ npm start
```
 npm start

> bob@1.0.0 start
> webpack serve

/home/mjackson/test/planet-bob

webpack 5.4.0 compiled successfully in 2841 ms
webpack 5.4.0 compiled successfully in 122 ms
webpack 5.4.0 compiled successfully in 75 ms
webpack 5.4.0 compiled successfully in 84 ms
webpack 5.4.0 compiled successfully in 71 ms
webpack 5.4.0 compiled successfully in 93 ms
--------------------------------------------------------
webpack 5.4.0 compiled successfully in 2792 ms
webpack 5.4.0 compiled successfully in 125 ms
webpack 5.4.0 compiled successfully in 76 ms
webpack 5.4.0 compiled successfully in 72 ms
webpack 5.4.0 compiled successfully in 67 ms
webpack 5.4.0 compiled successfully in 59 ms
--------------------------------------------------------
webpack 5.4.0 compiled successfully in 2820 ms
webpack 5.4.0 compiled successfully in 305 ms
webpack 5.4.0 compiled successfully in 102 ms
webpack 5.4.0 compiled successfully in 102 ms
webpack 5.4.0 compiled successfully in 93 ms
webpack 5.4.0 compiled successfully in 76 ms

