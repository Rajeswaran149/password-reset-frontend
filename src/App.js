import './App.css';
import { Header } from './headers/Header';
import Signup from './login/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ForgotPassword from './login/ForgotPassword';
import UpdatePassword from './login/UpdatePassword';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>

          <Route exact path="/">
            <Signup />
          </Route>

          <Route exact path="/password-reset">
            <ForgotPassword />
          </Route>

          <Route exact path="/api/password-reset/:userid/:token">
            <UpdatePassword />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
