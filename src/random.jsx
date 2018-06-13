import React, { Component } from 'react';
import RandomJS from "random-js";

const texts = [
    "(´･_･`)Nyaan",
    "All your base are belong to us",
    "RAISE YOUR MIDDLE FINGER",
    "I am a Japanese general adult man",
    "Thanks your advise too much."
];

const random = RandomJS.engines.mt19937().autoSeed();

export class Random extends Component {
    constructor() {
        super();
        this.state = { offset: 0 };
    }
    render() {
        return (
            <box
                left='50%'
                top="50%"
                width='45%'
                height="45%"
                onClick={this.textClicked.bind(this)}
                onKeypress={this.textClicked.bind(this)}
                clickable={true}
                input={true}>
                <text
                    width='100%'
                    height="100%"
                    content={texts[this.state.offset]}
                    align="center"
                    valign="middle"
                />
            </box>
        );
    }
    textClicked() {
        //this.setState({ offset: (this.state.offset + 1) % texts.length });
        this.setState({ offset: RandomJS.integer(0, texts.length - 1)(random) });
    }
}