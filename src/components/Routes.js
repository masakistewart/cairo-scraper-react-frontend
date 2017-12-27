import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import UserInputForm from "./UserInputForm";
import JsonVisualizer from './JsonVisualizer';
import Header from './Header';
import Loading from './Loading';

export default class Routes extends Component {
    constructor(props) {
        super(props)
        this.state = {
            json: {}
        }
        this.getScrapedJSON = this.getScrapedJSON.bind(this)
    }

    async getScrapedJSON() {
        let scrapedJson = await fetch('https://dry-sands-95822.herokuapp.com/');
        scrapedJson = await scrapedJson.json();
        await this.setState({ json: {data: scrapedJson} })
    }

    render() {
        return (
            <div>
                <Header />
                <div className="container">
                        <Switch>
                            <Route exact path="/" component={(props) => (<UserInputForm {...props} getScrapedJSON={this.getScrapedJSON} />)} />
                            <Route path="/json" component={(props) =>  (this.state.json.data) ? <JsonVisualizer {...props} json={this.state.json.data}/> : <Loading />} />
                        </Switch>
                </div>
            </div>
        );
    }


}