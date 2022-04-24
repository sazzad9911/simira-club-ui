
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
import ShowCaseCategory from "./Screens/ShowCaseCategory";
import ShowCaseDeal from "./Screens/ShowCaseDeal";
import SearchHotel from "./Screens/SearchHotel";
import ShowcaseHotel from "./Screens/ShowcaseHotel"
import NotFound from "./Screens/NotFound";
import { useDispatch, useSelector } from 'react-redux'
import { url, postData, setHotels, setUser } from './action'
import SearchDeal from "./Screens/SearchDeal";
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const dispatch = useDispatch()
  const hotels = useSelector(state => state.Hotels)

  React.useEffect(() => {
    fetch(api() + "/checkUser").then(res => res.json())
      .then(data => {
        if (data.uid) {
          postData(url + '/getData', {
            tableName: 'user',
            condition: "uid=" + "'" + data.uid + "'"
          }).then(doc => {
            if (Array.isArray(doc)) {
              return dispatch(setUser(doc));
            }
            console.log(doc.message);
          }).catch(err => {
            console.log(err.message);
          })

        } else {
          console.log("no user found")
        }
      }).catch(err => {
        console.log(err)
      })

    postData(url + "/getData", {
      tableName: 'hotels',
      orderColumn: 'popularity'
    }).then(data => {
      if (data.message) {
        console.log(data.message)
        return
      }
      dispatch(setHotels(data))
      //dispatch(setBrands(data))
      //console.log(data)
    }).catch(err => {
      console.log(err.message)
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
        <Route path="/Search" element={<Search />} />
        <Route path="/Career" element={<Career />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
        <Route path="/JobDescription" element={<JobDescription />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/ShowCaseDealBrand" element={<ShowCaseDealBrand />} />
        <Route path="/ShowCaseCategory/restaurant" element={<ShowCaseCategory name="restaurant" />} />
        <Route path="/ShowCaseCategory/hotel" element={<ShowCaseCategory name="hotel" />} />
        <Route path="/ShowCaseDeal" element={<ShowCaseDeal />} />
        <Route path="/SearchHotel" element={<SearchHotel />} />
        {
          hotels ? (
            hotels.map((d, i) => (
              <Route key={i} path={"/ShowcaseHotel" + "/" + d.id} element={<ShowcaseHotel data={d} />} />
            ))
          ) : (
            <></>
          )
        }
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
