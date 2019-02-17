
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from './components/Nav';
import Content from './components/Content';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div>
          <Nav />
        </div>
        <div>
          <Content />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authState: state.app.auth,
});

export default connect(mapStateToProps)(App);
