const initialState=null

const User=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_USER':
            return state=action.playload
        default:
            return state 
    }
}
export default User