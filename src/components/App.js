import React, { Component } from 'react';
import ChartView from './ChartView'

class App extends Component {
  constructor(props) {
    super(props)
    this.getJsonData()
    this.state = {
      json: this.props.json,
      selectedJSON: this.props.json,
    }
  }

  changeTargetNodeOnChart(json) {
    this.setState({
      selectedJSON: json
    })
  }

  async getJsonData() {
    let scrapedJson = await fetch('https://dry-sands-95822.herokuapp.com/')
    scrapedJson = await scrapedJson.json()
    await console.log(scrapedJson)
    await this.changeTargetNodeOnChart(scrapedJson)
  }



  render() {
    return (
      <div className="App">
        <ChartView
          rootData={this.state.json}
          data={this.state.selectedJSON}
          changeTargetNodeOnChart={this.changeTargetNodeOnChart.bind(this)}
        />
      </div>
    );
  }
}

export default App;
