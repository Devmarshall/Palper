
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
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
          <BrowserRouter>
            <Header />
          </BrowserRouter>
        </div>
        <div>
          <BrowserRouter>
            <Content />
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authState: state.app.auth,
});

export default connect(mapStateToProps)(App);
