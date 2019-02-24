import React, {
  Component,
} from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../../screens/Landing';
import Login from '../../screens/Login';
import Signup from '../../screens/Signup';


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default Content;
