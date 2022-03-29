
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

import { useDispatch } from 'react-redux'
import { setUser } from './action'
import React from 'react'
import api from './api'
import SignUp from "./Screens/SignUp";
import Contact from "./Screens/Contact";
import BusinessWithUs from "./Screens/BusinessWithUs";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Search from "./Screens/Search";
import Career from "./Screens/Careers";
import TermsAndConditions from "./Screens/TermsAndConditions";
import JobDescription from "./Screens/JobDescription";
import Checkout from "./Screens/Checkout"
import ShowCaseDealBrand from "./Screens/ShowCaseDealBrand";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    fetch(api() + "/checkUser").then(res => res.json())
      .then(data => {
        if (data.uid) {
          dispatch(setUser(data));
        } else {
          console.log("no user found")
        }
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<MyProfile />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/BusinessWithUs" element={<BusinessWithUs />} />
        <Route path="/Search" element={<Search/>} />
        <Route path="/Career" element={<Career/>} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions/>}/>
        <Route path="/JobDescription" element={<JobDescription/>} />
        <Route path="/Checkout" element={<Checkout/>} />
        <Route path="/ShowCaseDealBrand" element={<ShowCaseDealBrand/>}/>
        
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
