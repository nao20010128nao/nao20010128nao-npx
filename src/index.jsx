import React, { Component } from 'react';
import blessed from 'blessed';
import { render } from 'react-blessed';

import { Profile } from './profile';

/**
 * L: 2% |L: 54%
 * T: 5% |T: 5% 
 * W: 45%|W: 45%
 * H: 45%|H: 45%
 * ------+------
 * L: 2% |L: 54%
 * T: 50%|T: 50%
 * W: 45%|W: 45%
 * H: 45%|H: 45% 
 */

class App extends Component {
    render() {
        return (
            <box label="nao20010128nao's profile"
                border={{ type: 'line' }}
                style={{ border: { fg: 'cyan' } }}>
                <Profile />
            </box>
        );
    }
}

const screen = blessed.screen({
    autoPadding: true,
    smartCSR: true,
    title: "nao20010128nao's profile"
});

screen.key(['escape', 'q', 'C-c'], function (ch, key) {
    return process.exit(0);
});

render(<App />, screen);