/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <main>
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="container py-lg-md d-flex">
                <div className="col px-0">
                  <div className="row">
                    <div className="col-lg-6">
                      <h1 className="display-3  text-white">
                        Show the world who you are
                      </h1>
                      <p className="lead  text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quos perspiciatis nulla rerum corrupti quia voluptatem deleniti, et eos. Repellendus temporibus voluptate laborum dolorum sit cum vel, quo asperiores culpa.</p>
                      <div className="btn-wrapper">
                        <a className="btn btn-info btn-icon mb-3 mb-sm-0">
                          <Link to="/login">
                            <span className="btn-inner--text">Login</span>
                          </Link>
                        </a>
                        <a href="#" className="btn btn-white btn-icon mb-3 mb-sm-0">
                          <Link to="/signup">
                            <span className="btn-inner--text">Register</span>
                          </Link>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="separator separator-bottom separator-skew">
                <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <polygon className="fill-white" points="2560 0 2560 100 0 100" />
                </svg>
              </div>
            </section>
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="row row-grid">
                    <div className="col-lg-4">
                      <div className="card card-lift--hover shadow border-0">
                        <div className="card-body py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-app" />
                          </div>
                          <h6 className="text-primary text-uppercase">Dev</h6>
                          <p className="description mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod est, alias similique voluptate quasi maiores? Debitis hic iusto repellendus aliquam earum, aliquid totam suscipit autem velit iure voluptates, magni accusantium.</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-lift--hover shadow border-0">
                        <div className="card-body py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-ruler-pencil" />
                          </div>
                          <h6 className="text-success text-uppercase">Design and Graphics</h6>
                          <p className="description mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, provident cumque. Quaerat modi laborum recusandae nobis fugit nam illo consequatur hic laudantium, vero quae qui. Deleniti ab eum voluptatem iste!</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="card card-lift--hover shadow border-0">
                        <div className="card-body py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-button-play" />
                          </div>
                          <h6 className="text-warning text-uppercase">Film and Animation</h6>
                          <p className="description mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nemo, modi voluptates necessitatibus quas molestias eaque, sit reprehenderit at amet nesciunt totam unde, quo facilis voluptas quibusdam repudiandae earum maiores!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="section section-lg bg-gradient-dark">
            <div className="container pt-lg pb-300">
              <div className="row text-center justify-content-center">
                <div className="col-lg-10">
                  <h2 className="display-3 text-white">Who's stopping you?</h2>
                </div>
              </div>
              <div className="row row-grid mt-5">
                <div className="col-lg-4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Building tools</h5>
                  <p className="text-white mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="col-lg-4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Grow your market</h5>
                  <p className="text-white mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <div className="col-lg-4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Launch time</h5>
                  <p className="text-white mt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
              </div>
            </div>
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg x="0" y="0" viewBox="0 0 2560 100" preserveAspectRatio="none" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <polygon className="fill-white" points="2560 0 2560 100 0 100" />
              </svg>
            </div>
          </section>
          <section className="section section-lg pt-lg-0 section-contact-us">
            <div className="container">
              <div className="row justify-content-center mt--300">
                <div className="col-lg-8">
                  <div className="card bg-gradient-secondary shadow">
                    <div className="card-body p-lg-5">
                      <h4 className="mb-1">Say Hi?</h4>
                      <div className="form-group mt-5">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ni ni-user-run" /></span>
                          </div>
                          <input className="form-control" placeholder="Your name" type="text" />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group input-group-alternative">
                          <div className="input-group-prepend">
                            <span className="input-group-text"><i className="ni ni-email-83" /></span>
                          </div>
                          <input className="form-control" placeholder="Email address" type="email" />
                        </div>
                      </div>
                      <div className="form-group mb-4">
                        <textarea className="form-control form-control-alternative" name="name" rows="4" cols="80" placeholder="Type a message..." />
                      </div>
                      <div>
                        <button type="button" className="btn btn-default btn-round btn-block btn-lg">Send Message</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Landing;
