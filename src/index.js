import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner'


class App extends React.Component {
  state = { lat: null, errMsg: null };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errMsg: err.message })  
    );
  }

  helperRender() {
    if (this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }
    
    if (this.state.errMsg) {
      return <div>Error:{this.state.errMsg}</div>;
    }

    return <Spinner>Getting location</Spinner>;
  }

  render() {
    return this.helperRender();
  }

};

ReactDOM.render(<App />, document.querySelector('#root'));