
import './App.css';
import { Header } from './headers/Header';
import Signup from './login/Signup';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ForgotPassword from './login/ForgotPassword';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Switch>
          <Route path={'/'}>
            <Signup />
          </Route>
          <Route path={'/forgot'}>
            <ForgotPassword />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
