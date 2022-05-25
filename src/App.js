
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useRouteMatch
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
import { url, postData, setHotels, setUser,setBrands, setBanners,setDeals } from './action'
import SearchDeal from "./Screens/SearchDeal";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from './firebase'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'bootstrap/dist/css/bootstrap.min.css';

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

  return (
    <Router>
      <Header />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Search" element={<Search />} />
      <Route path="/SearchHotel/:search" element={<SearchHotel />} />
      <Route path="/ShowCaseCategory/:type" element={<ShowCaseCategory/>} />
      <Route path="/ShowCaseDealBrand/:id" element={<ShowCaseDealBrand />} />
      <Route path={"/ShowcaseHotel/:id"} element={<ShowcaseHotel />} />
        <Route path="*" element={<NotFound />} />     
      </Routes>
      <div style={{ height: 50, width: '100%',marginTop:'220px' }}></div>
      <Footer />
    </Router>
  );

}

export default App;
