
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
import Contact from "./Screens/Contact";
import BusinessWithUs from "./Screens/BusinessWithUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Profile" element={<MyProfile/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="Contact" element={<Contact/>}/>
        <Route path="BusinessWithUs" element={<BusinessWithUs/>}/>
      </Routes>
    </Router>
  );
}

export default App;
