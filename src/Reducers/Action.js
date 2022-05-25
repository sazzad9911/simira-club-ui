const initialState=null

const Action =(state=initialState,action)=>{
    if(action.type=='SET_ACTION'){
        return action.playload
    }
    return action
}
export default Action