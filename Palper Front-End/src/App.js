
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Footer from './components/Footer';
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
          <Header />
        </div>
        <div>
          <Content />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authState: state.app.auth,
});

export default connect(mapStateToProps)(App);
