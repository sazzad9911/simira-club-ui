import {createStore,combineReducers} from 'redux'
import Deals from './Reducers/Deals'
import User from './Reducers/User'
import Brands from './Reducers/Brands';

const combine=combineReducers({
    User:User,
    Deals:Deals,
    Brands:Brands,
})

const store = createStore(combine)

export default store