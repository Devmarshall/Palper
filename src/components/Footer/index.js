import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <div className="row align-items-center justify-content-md-between">
              <div className="col-md">
                <div className="copyright">
                  Intellectual property of &copy; Palper 2018
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
