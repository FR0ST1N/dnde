import { Switch, Route, Redirect } from 'react-router-dom';
import { List } from './List';
import Editor from './Editor';

const Routing = () => {
  return (
    <Switch>
      <Route exact path="/list" component={List} />
      <Route exact path="/template" component={Editor} />
      <Route path="*">
        <Redirect to="/list" />
      </Route>
    </Switch>
  );
};

export { Routing };
