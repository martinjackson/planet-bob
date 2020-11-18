#!/bin/bash

NOW=$(date +'%Y-%m-%d %H:%M')
sed -i -e "s/const when = '[^']*'/const when = '$NOW'/g" ./ExampleHooks.js