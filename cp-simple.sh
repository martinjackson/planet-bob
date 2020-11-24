#!/bin/bash

echo 'Copying lib files from ~/projects/simple-widgets'
read -p "Are you sure? " -n 1 -r
echo    # (optional) move to a new line
if [[ $REPLY =~ ^[Yy]$ ]]
then
    # do dangerous stuff
    cp ~/projects/simple-widgets/lib/index.* node_modules/simple-widgets/lib/

    echo 'ready to test simple-widgets before publishing, Answering the question'
    echo 'Did simple-widgets build correctly ?'
fi
