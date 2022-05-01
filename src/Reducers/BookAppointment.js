const initialState=null;

const BookAppointment = (state=initialState,action)=>{
    if(action.type=='SET_BOOK_APPOINTMENT'){
        return state=action.playload
    }
    return state
}
export default BookAppointment