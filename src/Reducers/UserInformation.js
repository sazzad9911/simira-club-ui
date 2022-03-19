const initialState =null;

const UserInformation=(state=initialState,action)=>{
    switch(action.type){
        case 'SET_USER':
            return state=action.playload;
        default:
            return state    
    }
}
export default UserInformation