const React = require("react");
const { Component } = React;

const items = {
    "GitHub": "https://github.com/nao20010128nao",
    "Twitter": "https://twitter.com/2ndLesmi",
    "Blog": "https://nao20010128.blogspot.jp"
};
const keys = Object.keys(items);

const opn = require('opn');
const open = url => opn(url, { wait: false });

module.exports = class Links extends Component {
    constructor() {
        super();
        this.state = {
            url: "Select a website above",
            displayOpen: false
        };
    }

    render() {
        const { url, displayOpen } = this.state;
        return (
            <box label="Links"
                left='2%'
                top="50%"
                width='45%'
                height="45%"
                border={{ type: 'line' }}
                style={{ border: { fg: 'green' } }}>
                <list
                    left='5%'
                    top="5%"
                    width='90%'
                    height="40%"
                    style={{
                        item: { fg: 'white' },
                        selected: { fg: 'magenta' },
                    }}
                    mouse={true}
                    keys={true}
                    items={keys}
                    focused={true}
                    onSelect={this.selected.bind(this)}
                />
                <box
                    left='5%'
                    top="45%"
                    width='90%'
                    height={displayOpen ? "40%-1" : "40%"}>
                    {url}
                </box>
                {(
                    <box
                        left='5%'
                        top="85%"
                        width='90%'
                        height="1%"
                        input={true}
                        onClick={() => open(url)}>
                        {"Open"}
                    </box>
                )}
            </box>
        );
    }

    selected(item) {
        this.setState({ url: items[item.content], displayOpen: true });
    }
}
