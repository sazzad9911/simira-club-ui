import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import './css/Dashboard.css'
import { CChart } from '@coreui/react-chartjs';
import { AdminHeader } from '../Components/Header';
import Onboarding from './Onboarding';
import PageSettings from './PageSettings';
import Hotels from './Hotels';
import Brands from './Brands';
import Membership from './Membership';
import Notification from './Notification';
import Customer from './Customer';
import {postData, url,setUsers, setBookAppointment} from '../action'
import { setHotelBooking, setCustomerMessages } from './../action';

const Dashboard = () => {
    const User = useSelector(state => state.User)
    const [drawer, setDrawer] = React.useState(false)
    const [option, setOption] = React.useState('Dashboard')
    const dispatch = useDispatch()
    const action = useSelector(state => state.pageSettings.action)

    React.useEffect(() =>{
        postData(url +'/getData',{
            tableName: 'user'
        }).then((data) =>{
            if(Array.isArray(data)){
                return dispatch(setUsers(data))
            }
        })
    },[])
    React.useEffect(()=>{
        postData(url +'/getData',{
            tableName: 'hotel_booking',
            orderColumn: 'date'
        }).then((data) =>{
            if(Array.isArray(data)){
                return dispatch(setHotelBooking(data))
            }
        })
    },[])
    React.useEffect(() => {
        postData(url +'/getData',{
            tableName:'book_appointment',
            orderColumn: 'date'
        }).then(data => {
            if(Array.isArray(data)){
                dispatch(setBookAppointment(data))
            }
        })
    },[])
    React.useEffect(() => {
        postData(url +'/getData',{
            tableName: 'customer_messages',
            orderColumn: 'date'
        }).then((data) => {
            if(Array.isArray(data)){
                dispatch(setCustomerMessages(data))
            }
        })
    },[])
    if (User && User[0].admin != 1) {
        window.location.href = '/'
    }
    return (
        <div style={{ height: '100vh', width: '100%', display: 'flex' }}>
            <div style={{
                height: '100%',
                overflowY: 'scroll',
                flexBasis: drawer ? '250px' : '65px',
                flexGrow: '0',
                flexShrink: '0',
                top:'0',
                left:'0',
            }}>
                <AdminHeader setOption={setOption}
                    option={option} drawer={drawer} setDrawer={setDrawer} />
            </div>
            <div style={{ height: '100%', overflowY: 'scroll', width: '100%' }}>
                {
                    option == 'Dashboard' ? (
                        <Onboarding />
                    ) : option == 'Page Settings' ? (
                        <PageSettings />
                    ) : option == 'Hotels' ? (
                        <Hotels />
                    ) :option == 'Brands' ?(
                        <Brands/>
                    ):option == 'Membership'?(
                        <Membership/>
                    ):option == 'Notifications'?(
                        <Notification/>
                    ):option == 'Customer Point'?(
                        <Customer/>
                    ):
                    (
                        <div></div>
                    )
                }
            </div>
        </div>
    );
};

export default Dashboard;