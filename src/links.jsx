import React, { Component } from 'react';

export class Links extends Component{
    render() {
        return (
          <box label="Links"
               left='2%'
               top="50%"
               width='45%'
               height="45%"
               border={{type: 'line'}}
               style={{border: {fg: 'green'}}}>
            {"WIP"}
          </box>
        );
    }
}
