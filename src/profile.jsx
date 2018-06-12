import React, { Component } from 'react';

export class Profile extends Component{
    render() {
        return (
          <box label="Profile"
               left='2%'
               width='45%'
               height="45%"
               top="5%"
               border={{type: 'line'}}
               style={{border: {fg: 'green'}}}>
            Birthday: 28 Jan, 2018
            Gender: Male
          </box>
        );
    }
}
