import React, {
  Component,
} from 'react';
import { Switch, Route } from 'react-router-dom';
import Landing from '../../screens/Landing';


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
        </Switch>
      </div>
    );
  }
}

export default Content;
