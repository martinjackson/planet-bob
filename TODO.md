
[ ] Local version of SearchSortTable <div><div style={is missing}><table ...>


    Chrome debugger, inspect each component, Edit HTML, copy to files in ./test/, format Document, VSCode compare the two files

import {SearchSortTable} from 'simple-widgets'

   <div
      style="display: block; overflow: scroll; height: auto; width: auto; border: 1px solid black; margin-left: auto; margin-right: auto;">
      <table style="margin: auto; border: 1px solid black; position: relative;">

276   let tableDivStyle = {};
277   if (hasProperty(props,'scroll') === true) {
        if (hasProperty(props,'scrollStyle') === true) {
            tableDivStyle = props.scrollStyle;
        } else {
            tableDivStyle = scrollStyle;
        }
283   }


import SearchSortTable2 from './SearchSortTable'

    269    let tableDivStyle = props?.scrollStyle || {};
    447    <div style={tableDivStyle}>

   <div>

      <table style="margin: auto; border: 1px solid black; position: relative;">


#### proposed optional chaining
```
    npm install @babel/plugin-proposal-optional-chaining --save-dev
    {
      "plugins": [
        "@babel/plugin-proposal-optional-chaining"
      ]
    }

    npm install babel-eslint --save-dev
```


Win10 Version 2004 (OS Build 19041.572)
Win10 Version 20H2 (OS Build 19042.630)
[] GitBash
[] PowerShell
[] WSL2

__GitBash Logs__
cd ~/test
git clone https://github.com/martinjackson/planet-bob.git
cd bob
npm install
npm start
webpack serve

webpack 5.4.0 compiled successfully in 3141 ms
webpack 5.4.0 compiled successfully in 316 ms


__PowerShell Logs__
npm start
webpack serve
...
webpack 5.4.0 compiled successfully in 3099 ms
webpack 5.4.0 compiled successfully in 328 ms


