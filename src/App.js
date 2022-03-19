import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Screens/Home';
import MyProfile from './Screens/MyProfile';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/Profile">
          <MyProfile/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
