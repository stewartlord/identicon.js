#!/bin/bash

# please be sure you have browserify installed. (sudo npm install -g browserify)
# you can of course also adapt this script to your own packaging tool

browserify sha512.js > sha512.bin.js

