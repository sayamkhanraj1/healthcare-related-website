import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Appbar from './pages/Home/Header/Appbar/Appbar';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Home/Footer/Footer';
import Error from './pages/Error/Error';
import Doctors from './pages/Home/Doctors/Doctors';
import Updates from './pages/Home/Updates/Updates';
import Services from './pages/Home/Services/Services';
import Login from './Login/Login/Login';
import Serviceing from './pages/Serviceing/Serviceing/Serviceing';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Appbar />
        <Switch>
          <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/home">
          <Home />
          </Route>
          <Route exact path="/services">
          <Services />
          </Route>
          <PrivateRoute exact path="/services/:serviceId">
          <Serviceing />
          </PrivateRoute>
          <Route exact path="/updates">
          <Updates />
          </Route>
          <Route exact path="/doctors">
          <Doctors />
          </Route>
          <Route exact path="/login">
          <Login />
          </Route>
          <Route exact path="*">
          <Error/>
          </Route>
        </Switch>
        <Footer />
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
