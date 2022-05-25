import {createStore,combineReducers} from 'redux'
import Deals from './Reducers/Deals'
import User from './Reducers/User'
import Brands from './Reducers/Brands';
import Hotels from './Reducers/Hotels';
import Users from './Reducers/Users';
import pageSettings from './Reducers/pageSettings';
import HotelBooking from './Reducers/HotelBooking';
import BookAppointment from './Reducers/BookAppointment';
import CustomerMessages from './Reducers/CustomerMessages';
import Banners from './Reducers/Banners';
import Action from './Reducers/Action';

const combine=combineReducers({
    User:User,
    Deals:Deals,
    Brands:Brands,
    Hotels:Hotels,
    Users:Users,
    pageSettings:pageSettings,
    HotelBooking:HotelBooking,
    BookAppointment:BookAppointment,
    CustomerMessages:CustomerMessages,
    Banners:Banners,
    Action:Action
})

const store = createStore(combine)

export default store