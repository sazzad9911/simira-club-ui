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
    }else if(action.type=='SET_ACTION'){
        return state={
            loader:state.action,
            action:action.playload
        }
    }
    return state
}
export default pageSettings