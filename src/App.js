
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
import Login from "./Components/LogIn";
import SignUp from "./Screens/SignUp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Profile" element={<MyProfile/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
