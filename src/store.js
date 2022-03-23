import {createStore,combineReducers} from 'redux'
import UserInformation from './Reducers/UserInformation'
import User from './Reducers/User'

const combine=combineReducers({
    UserInformation:UserInformation,
    User:User
})

const store = createStore(combine)

export default store