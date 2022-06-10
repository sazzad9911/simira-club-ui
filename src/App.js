
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useRouteMatch,useLocation
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
import Membership from "./Screens/Membership"
import { useDispatch, useSelector } from 'react-redux'
import { url, postData, setHotels, setUser,setBrands, setBanners,setDeals,setUsers } from './action'
import SearchDeal from "./Screens/SearchDeal";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from './firebase'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import HotelList from './Screens/HotelList';
import ChangePassword from './Screens/ChangePassword';
import ForgetPassword from './Screens/ForgetPassword';
import Login2 from './Components/LogIn2';
import PrivacyPolicy from './Screens/PrivacyPolicy';
import AppOverView from './Cart/AppOverView';
import MobileScreen from './Cart/MobileScreen';

function App() {
  const dispatch = useDispatch()
  const hotels = useSelector(state => state.Hotels)
  const auth = getAuth(app)
  const [admin, setAdmin] = React.useState(false)
  const action=useSelector(state => state.pageSettings.action)

  React.useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        postData(url + '/getData', {
          tableName: 'user',
          condition: "uid=" + "'" + user.uid + "'"
        }).then(data => {
          if (Array.isArray(data)) {
            if (data[0].admin == 1) {
              setAdmin(true);
            }
            dispatch(setUser(data))
          }
        })
      } else {
        dispatch(setUser(null));
      }
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
    postData(url +'/getData',{
      tableName: 'user'
    }).then(data => {
      if(Array.isArray(data)){
        return dispatch(setUsers(data));
      }
      console.log(data.message)
    })
  }, [action])
  React.useEffect(() => {
    postData(url + "/getData", {
      tableName: 'brands',
    }).then(data => {
      if(Array.isArray(data)){
        return dispatch(setBrands(data));
      }
      //dispatch(setBrands(data))
      //console.log(data)
    }).catch(err => {
      console.log(err.message)
    })
  }, [action])
  React.useEffect(() => {
    postData(url+"/getData",{
        tableName:'slider'
    }).then(data=>{
        if(Array.isArray(data)){
          dispatch(setBanners(data))
        }
        //console.log(data)
    }).catch(err=>{
        console.log(err.message)
    })
}, [action])
React.useEffect(() => {
  postData(url + '/getData', {
      tableName: 'deals',
      orderColumn: 'date'
  }).then(data => {
      if (Array.isArray(data)) {
          return dispatch(setDeals(data));
      }
      console.log(data);
  }).catch(err => {
      console.log(err.message);
  })
}, [action])

if(window.innerWidth<600){
  return(
    <MobileScreen />
  )
}
  return (
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/SearchHotel/:search" element={<SearchHotel />} />
      <Route path="/SearchDeal/:search" element={<SearchDeal />} />
      <Route path="/ShowCaseCategory/:type" element={<ShowCaseCategory/>} />
      <Route path="/ShowCaseDealBrand/:id" element={<ShowCaseDealBrand />} />
      <Route path={"/ShowcaseHotel/:id"} element={<ShowcaseHotel />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/BusinessWithUs" element={<BusinessWithUs />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Login2" element={<Login2 />} />
      <Route path="/Membership" element={<Membership />} />
      <Route path="/Checkout/:id" element={<Checkout />} />
      <Route path="/Profile" element={<MyProfile />} />
      <Route path="/TermsAndConditions" element={<TermsAndConditions />} />
      <Route path="/SignUp" element={<SignUp />} />
      <Route path="/ShowCaseDeal/:id" element={<ShowCaseDeal />} />
      <Route path="/Career" element={<Career />} />
      <Route path="/JobDescription" element={<JobDescription />} />
      <Route path="/ChangePassword" element={<ChangePassword />} />
      <Route path="/ForgetPassword" element={<ForgetPassword />} />
      <Route path="/HotelList/:search" element={<HotelList />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NotFound />} />     
      </Routes>
      <div style={{ height: 50, width: '100%',marginTop:'0px' }}></div>
      <Footer />
    </Router>
  );

}

export default App;
