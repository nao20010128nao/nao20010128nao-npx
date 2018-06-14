const React = require("react");
const { Component } = React;
const terminalImage = require('terminal-image-resizeable');
const { rin, miku } = require("./images/");
const images = [rin, miku];
require("./utils/sizeKnownBox");

module.exports = class Image extends Component {
    constructor() {
        super();
        this.state = { offset: 0, stringData: "", loaded: -1, rect: -1, loadedSize: -1 };
        this.imageSwitcher();
    }
    componentWillMount() {
        this.loadImg();
    }
    render() {
        return (
            <skb
                label="Image"
                left='50%'
                top="5%"
                width='45%'
                height="45%"
                border={{ type: 'line' }}
                style={{ border: { fg: 'green' } }}
                onResizeSize={this.processResize.bind(this)}
                clickable={true}
                input={true}>
                {this.state.stringData}
            </skb>
        );
    }
    loadImg() {
        if (this.state.rect == -1 || (this.state.offset == this.state.loaded && this.state.rect == this.state.loadedSize)) {
            return
        }
        (async () => {
            const { offset, rect } = this.state;
            const stringData = await terminalImage.buffer(images[offset], rect * 2, rect);
            this.setState({ stringData, loaded: offset, loadedSize: rect });
        })();
    }
    processResize(size) {
        const { width, height } = size;
        const rect = Math.min(width, height) * 0.7;
        this.setState({ rect });
        this.loadImg();
    }
    imageSwitcher() {
        const self = this;
        setInterval(() => {
            const { offset } = self.state;
            self.setState({ offset: (offset + 1) % images.length });
            self.loadImg();
        }, 5000);
    }
}