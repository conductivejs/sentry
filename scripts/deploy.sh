#!/bin/bash

function error {
    echo '[!] Cannot deploy.'
    exit 1;
}

function copy_chunks_to_root {
    # The 'eslint-plugin-import' package is unaware of how to handle the 'exports' field.
    # https://github.com/import-js/eslint-plugin-import/issues/1810
    # https://github.com/import-js/eslint-plugin-import/issues/1868

    echo '[*] Copying chunks to root...'  
    cp bin/*.js .
}

function remove_chunks_from_root {
    echo '[*] Removing chunks from root...' 
    rm sentry.js
}

npm run build
if [ $? -ne 0 ]; then error; fi;

copy_chunks_to_root
if [ $? -ne 0 ]; then error; fi;

echo "[*] Deploying..."
npm publish
if [ $? -ne 0 ]; then error; fi;

remove_chunks_from_root
if [ $? -ne 0 ]; then error; fi;

