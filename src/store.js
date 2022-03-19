import {createStore,combineReducers} from 'redux'
import UserInformation from './Reducers/UserInformation'

const combine=combineReducers({
    UserInformation:UserInformation
})

const store = createStore(combine)

export default store