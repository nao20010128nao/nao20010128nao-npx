const React = require("react");
const { Component } = React;
const { rin, miku } = require( "./images/");
const images = [rin, miku];

module.exports = class Image extends Component {
    constructor() {
        super();
        this.state = { offset: 0 };
    }
    render() {
        return (
            <box
                label="Image"
                left='50%'
                top="5%"
                width='45%'
                height="45%"
                border={{ type: 'line' }}
                style={{ border: { fg: 'green' } }}>
                <image
                    type='ansi'
                    file={images[this.state.offset]} />
            </box>
        );
    }
}