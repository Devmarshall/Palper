/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header className="header-global">
        <nav id="navbar-main" className="navbar navbar-main navbar-expand-lg navbar-transparent navbar-light headroom">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="../assets/img/brand/white.png" alt="brand_img" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="navbar-collapse collapse" id="navbar_global">
              <div className="navbar-collapse-header">
                <div className="row">
                  <div className="col-6 collapse-brand">
                    <a href="/">
                      <img src="../assets/img/brand/blue.png" alt="brand_img" />
                    </a>
                  </div>
                  <div className="col-6 collapse-close">
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbar_global" aria-controls="navbar_global" aria-expanded="false" aria-label="Toggle navigation">
                      <span />
                      <span />
                    </button>
                  </div>
                </div>
              </div>
              {/* <ul className="navbar-nav navbar-nav-hover align-items-lg-center"> */}
              {/* <li className="nav-item dropdown">
                  <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                    <i className="ni ni-ui-04 d-lg-none" />
                    <span className="nav-link-inner--text">Components</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-xl">
                    <div className="dropdown-menu-inner">
                      <a href="https://demos.creative-tim.com/argon-design-system/docs/getting-started/overview.html" className="media d-flex align-items-center">
                        <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                          <i className="ni ni-spaceship" />
                        </div>
                        <div className="media-body ml-3">
                          <h6 className="heading text-primary mb-md-1">Getting started</h6>
                          <p className="description d-none d-md-inline-block mb-0">Learn how to use Argon compiling Scss, change brand colors and more.</p>
                        </div>
                      </a>
                      <a href="https://demos.creative-tim.com/argon-design-system/docs/foundation/colors.html" className="media d-flex align-items-center">
                        <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                          <i className="ni ni-palette" />
                        </div>
                        <div className="media-body ml-3">
                          <h6 className="heading text-primary mb-md-1">Foundation</h6>
                          <p className="description d-none d-md-inline-block mb-0">Learn more about colors, typography, icons and the grid system we used for Argon.</p>
                        </div>
                      </a>
                      <a href="https://demos.creative-tim.com/argon-design-system/docs/components/alerts.html" className="media d-flex align-items-center">
                        <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                          <i className="ni ni-ui-04" />
                        </div>
                        <div className="media-body ml-3">
                          <h5 className="heading text-warning mb-md-1">Components</h5>
                          <p className="description d-none d-md-inline-block mb-0">Browse our 50 beautiful handcrafted components offered in the Free version.</p>
                        </div>
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a href="#" className="nav-link" data-toggle="dropdown" role="button">
                    <i className="ni ni-collection d-lg-none" />
                    <span className="nav-link-inner--text">Examples</span>
                  </a>
                  <div className="dropdown-menu">
                    <a href="../examples/landing.html" className="dropdown-item">Landing</a>
                    <a href="../examples/profile.html" className="dropdown-item">Profile</a>
                    <a href="../examples/login.html" className="dropdown-item">Login</a>
                    <a href="../examples/register.html" className="dropdown-item">Register</a>
                  </div>
                </li> */}
              {/* <li className="nav-item ">
                  <a href="#" className="nav-link" role="button">
                    <i className="ni ni-collection d-lg-none" />
                    <span className="nav-link-inner--text">Login</span>
                  </a>
                </li>
                <li className="nav-item ">
                  <a href="#" className="nav-link" role="button">
                    <i className="ni ni-collection d-lg-none" />
                    <span className="nav-link-inner--text">Register</span>
                  </a>
                </li> */}
              {/* </ul>
              <ul className="navbar-nav align-items-lg-center ml-lg-auto">
                <li className="nav-item d-none d-lg-block ml-lg-4">
                  <a href="https://www.creative-tim.com/product/argon-design-system" className="btn btn-neutral btn-icon">
                    <span className="btn-inner--icon">
                      <i className="fa fa-cloud-download mr-2" />
                    </span>
                    <span className="nav-link-inner--text">Login</span>
                  </a>
                </li>
                <li className="nav-item d-none d-lg-block ml-lg-4">
                  <a href="https://www.creative-tim.com/product/argon-design-system" className="btn btn-neutral btn-icon">
                    <span className="btn-inner--icon">
                      <i className="fa fa-cloud-download mr-2" />
                    </span>
                    <span className="nav-link-inner--text">Register</span>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
