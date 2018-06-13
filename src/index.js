const React = require("react");
const { Component } = React;
const blessed = require('blessed');
const { render } = require('react-blessed');
const importJsx = require("import-jsx");

const Profile = importJsx('./profile');
const Links = importJsx('./links');
const Image = importJsx('./image');
const Random = importJsx('./random');

/**
 * L: 2% |L: 50%
 * T: 5% |T: 5% 
 * W: 45%|W: 45%
 * H: 45%|H: 45%
 * ------+------
 * L: 2% |L: 50%
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
                <Links />
                <Image />
                <Random />
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