const initialState={
    loader:false,
    action:false,
}

const pageSettings =(state=initialState,action)=>{
    if(action.type=='SET_PAGE_SETTINGS'){
        return state=action.playload
    }else if(action.type=='SET_LOADER'){
        return state={
            loader:action.playload,
            action:state.action
        }
    }
}
export default pageSettings