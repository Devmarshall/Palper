/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row row-grid align-items-center mb-5">
            <div className="col-lg-6">
              <h3 className="text-primary font-weight-light mb-2">Thank you for supporting us!</h3>
              <h4 className="mb-0 font-weight-light">We would really love for you to get in touch tho...</h4>
            </div>
            <div className="col-lg-6 text-lg-center btn-wrapper">
              <a className="btn btn-neutral btn-icon-only  btn-round btn-lg" data-toggle="tooltip" data-original-title="Follow us">
                <i className="fa fa-twitter" />
              </a>
              <a className="btn btn-neutral btn-icon-only btn-round btn-lg" data-toggle="tooltip" data-original-title="Like us">
                <i className="fa fa-facebook-square" />
              </a>
              <a className="btn btn-neutral btn-icon-only btn-lg btn-round" data-toggle="tooltip" data-original-title="Follow us">
                <i className="fa fa-dribbble" />
              </a>
              <a className="btn btn-neutral btn-icon-only btn-round btn-lg" data-toggle="tooltip" data-original-title="Star on Github">
                <i className="fa fa-github" />
              </a>
            </div>
          </div>
          <hr />
          <div className="row align-items-center justify-content-md-between">
            <div className="col-md-6">
              <div className="copyright">
                &copy; 2018
                <a> Palper</a>
              </div>
            </div>
            <div className="col-md-6">
              <ul className="nav nav-footer justify-content-end">
                <li className="nav-item">
                  <a className="nav-link">Palper</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">About Us</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
