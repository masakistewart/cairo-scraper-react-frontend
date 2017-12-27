import React, { Component } from "react";
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';


export default class UserInputForm extends Component {
    constructor(props) {
        super(props);
        this.clickHandler = this.clickHandler.bind(this)
    }

    get paperStyle() {
        return {
            width: '100%',
            padding: '2em',
            marginTop: '12em'
        }
    }

    clickHandler() {
        if (this.props) {
            this.props.getScrapedJSON()
            this.props.history.push('/json')
        }
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <Paper style={this.paperStyle} zDepth={1}>
                {/* <TextField
                    hintText="Target Url"
                    fullWidth={true}
                    underlineFocusStyle={{ borderColor: '#e65212' }}
                /> */}

                <RaisedButton
                    onClick={this.clickHandler}
                    label="Scrape it!"
                    style={{ marginTop: '1em'}}
                    labelColor={'#e65212'}
                />
                </Paper>
            </div>
        );
    }
}