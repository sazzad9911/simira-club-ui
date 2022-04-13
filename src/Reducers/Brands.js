const initialState=null

const Brands =(state=initialState,action)=>{
    if(action.type=='SET_BRANDS'){
        return state=action.playload
    }
    return state;
}
export default Brands