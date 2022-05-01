const initialState=null;

const Banners =(state=initialState,action)=>{
    if(action.type=='SET_BANNERS'){
        return state=action.playload
    }
    return state
}
export default Banners