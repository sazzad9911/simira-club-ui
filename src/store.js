import {createStore,combineReducers} from 'redux'
import Deals from './Reducers/Deals'
import User from './Reducers/User'
import Brands from './Reducers/Brands';
import Hotels from './Reducers/Hotels';

const combine=combineReducers({
    User:User,
    Deals:Deals,
    Brands:Brands,
    Hotels:Hotels,
})

const store = createStore(combine)

export default store