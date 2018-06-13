#!/usr/bin/env node
require('babel-register')({
    "presets": ["react", "es2015"]
});
require("./index");