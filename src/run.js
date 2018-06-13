#!/usr/bin/node

'use strict';
const path = require('path');
const meow = require('meow');
const termImg = require('term-img');
const importJsx = require('import-jsx');
const terminalImage = require('terminal-image');
const {
    h,
    render
} = require('ink');

const ui = importJsx('./ui');
const avatar = path.join(__dirname, 'avatar.png');

meow(`
	Usage
	  $ nao20010128nao
`);

terminalImage.file(avatar)
    .then(console.log)
    .then(() => render(h(ui)));
