'use strict';
const {h, Text} = require('ink');
const SelectInput = require('ink-select-input');
const opn = require('opn');

const open = url => opn(url, {wait: false});

const handleSelect = item => {
	if (item.url) {
		open(item.url);
	}

	if (item.action) {
		item.action();
	}
};

const items = [
	{
		label: 'Blog',
		url: 'https://nao20010128.blogspot.jp'
	},
	{
		label: 'Twitter',
		url: 'https://twitter.com/2ndLesmi'
	},
	{
		label: 'GitHub',
		url: 'https://github.com/nao20010128nao'
	},
	{
		label: 'Contact',
		url: 'https://twitter.com/2ndLesmi'
    },
    {
		label: 'Quit',
		action() {
			process.exit();
		}
	}
];

module.exports = () => (
	<div>
		<br/>
		<div>
			<Text>Every "Virtual YouTubeｒ"s should say "f**k you", aren't they?</Text>
		</div>
		<br/>
		<SelectInput items={items} onSelect={handleSelect}/>
	</div>
);