const initialState=null

const Users =(state=initialState,action)=>{
    if(action.type=='SET_USERS'){
        return state=action.playload
    }
    return state
}
export default Users