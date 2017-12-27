import React, { Component } from "react";
import Paper from 'material-ui/Paper';
import ReactJson from 'react-json-view'

export default class JsonVisualizer extends Component {
    constructor(props) {
        super()
    }
    get paperStyle() {
        return {
            width: '100%',
            padding: '1em',
            marginTop: '1em'
        }
    }
    render() {
        return (
            <Paper style={this.paperStyle} zDepth={1}>
                 <ReactJson src={this.props.json} />
            </Paper>
        );
    }
}