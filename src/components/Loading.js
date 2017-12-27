import React, { Component } from "react";
import CircularProgress from 'material-ui/CircularProgress';

export default class Loading extends Component {
    render() {
        return (
            <div style={{ height: '100vh' }}>
                <CircularProgress style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    top: '0',
                    bottom: '0',
                    margin: 'auto',
                    maxWidth: '100%',
                    maxHeight: '100%',
                    overflow: 'auto'
                }} size={80} thickness={5} />
            </div>
        );
    }
}