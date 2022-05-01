const initialState=null

const CustomerMessages =(state=initialState,action)=>{
    if(action.type=='SET_CUSTOMER_MESSAGES'){
        return state=action.playload
    }
    return state
}

export default CustomerMessages