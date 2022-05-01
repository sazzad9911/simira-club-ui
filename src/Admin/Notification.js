import React from 'react';
import afaga from '../Asset/Font/afaga.png'
import './css/Notification.css'
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux'

const Notification = () => {
    const HotelBooking = useSelector(state => state.HotelBooking)
    return (
        <div className='page-settings'>
            <h3 style={{ textAlign: 'center' }}>Notifications</h3>
            {
                HotelBooking ? (
                    HotelBooking.map((d, i) => (
                        <Cart key={i} data={d}/>
                    ))
                ) : (
                    <h4>Loading....</h4>
                )
            }
        </div>
    );
};

export default Notification;

const Cart = (props) => {
    const data=props.data;
    const Users=useSelector(state => state.Users)
    const Hotels = useSelector(state => state.Hotels)
    const [User,setUser]= React.useState(null)
    const [Hotel,setHotel]= React.useState(null)
    const CheckIn=new Date(data.check_in)
    const CheckOut=new Date(data.check_out)
    const Months=['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    React.useEffect(() => {
        if(Users && Hotels) {
            let user=Users.find(element=>element.uid==data.user_id)
            setUser(user)
            let hotel=Hotels.find(element=>element.id==data.hotel_id)
            setHotel(hotel)
        }
    },[Users+Hotels])

    return (
        <div className='page-add'>
            <h4>Hotel Booking Request</h4>
            <div className='notification-up-area'>
                <img src={User?User.image:afaga} />
                <div>
                    <p>{User?User.name:''}</p>
                    <p><b>{User?User.membership_type:''}</b>Membership</p>
                </div>
            </div>
            <div className='notification-up-area'>
                <p><b>Check In Date: </b>{CheckIn.getDate()+' '+Months[CheckIn.getMonth()]+' '+CheckIn.getYear()}</p>
                <p><b>Check Out Date: </b>{CheckOut.getDate()+' '+Months[CheckOut.getMonth()]+' '+CheckOut.getYear()}</p>
            </div>
            <div className='notification-up-area'>
                <p><b>Adult: </b>{data.adult}</p>
                <p><b>Children: </b>{data.children}</p>
                <p><b>Room: </b>{data.room}</p>
            </div>
            <h4>Hotel Information</h4>
            <div className='notification-up-area'>
                <p>{Hotel?Hotel.name:''}</p>
                <p>{Hotel?Hotel.address:''}</p>
                <p><b>Hotel ID: </b>{Hotel?Hotel.id:''}</p>
            </div>
            <div className="notification-bottom">
                <Button color='secondary' style={{
                    marginBottom: '20px',
                    margin: '10px'
                }} variant='contained'>Accept</Button>
                <Button style={{
                    marginBottom: '20px',
                    margin: '10px'
                }} variant='contained'>Reject</Button>
            </div>
        </div>
    )
}