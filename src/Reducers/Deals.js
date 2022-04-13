const initialState=null;

const Deals=(state=initialState,action)=>{
    if(action.type==='SET_DEALS'){
        return state=action.playload
    }
    return state
}
export default Deals