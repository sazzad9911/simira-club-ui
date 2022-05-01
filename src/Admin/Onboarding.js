import React from 'react';
import './css/Dashboard.css'
import { CChart } from '@coreui/react-chartjs';
import { useSelector } from 'react-redux'

const Onboarding = () => {
    const Brands = useSelector(state => state.Brands)
    const Hotels = useSelector(state => state.Hotels)
    const Users = useSelector(state => state.Users)
    const HotelBooking = useSelector(state => state.HotelBooking)
    const BookAppointment = useSelector(state => state.BookAppointment)
    const CustomerMessages = useSelector(state => state.CustomerMessages)
    const [Membership, setMemberShip] = React.useState([0,0,0,0,0])

    React.useEffect(() => {
        let platinum = 0, gold = 0, non = 0, silver = 0, diamond = 0;
        if (Users) {
            Users.forEach(user => {
                if (user.membership_type == 'gold') {
                    gold = gold + 1;
                } else if (user.membership_type == 'platinum') {
                    platinum = platinum + 1;
                } else if (user.membership_type == 'silver') {
                    silver = silver + 1;
                } else if (user.membership_type == 'diamond') {
                    diamond = diamond + 1;
                } else {
                    non = non + 1;
                }
            })
            setMemberShip([non,platinum,gold,silver,diamond])
        }

    }, [Users])
    return (
        <div style={{ height: '100%', overflowY: 'scroll', padding: '10px' }}>
            <div className="item-container">
                <div style={{ backgroundColor: '#F8C471' }} className="dashboard-item">
                    <h3>Total Hotels</h3>
                    <h2>{Hotels ? Hotels.length : '0'}</h2>
                </div>
                <div style={{ backgroundColor: '#E59866' }} className="dashboard-item">
                    <h3>Total Brands</h3>
                    <h2>{Brands ? Brands.length : '0'}</h2>
                </div>
                <div style={{ backgroundColor: '#ABEBC6' }} className="dashboard-item">
                    <h3>Total Users</h3>
                    <h2>{Users ? Users.length : '0'}</h2>
                </div>
                <div style={{ backgroundColor: '#85C1E9' }} className="dashboard-item">
                    <h3>Total Bookings</h3>
                    <h2>{HotelBooking ? HotelBooking.length : '0'}</h2>
                </div>
                <div style={{ backgroundColor: '#D7BDE2' }} className="dashboard-item">
                    <h3>Total Orders</h3>
                    <h2>{BookAppointment ? BookAppointment.length : '0'}</h2>
                </div>
                <div style={{ backgroundColor: '#F9E79F' }} className="dashboard-item">
                    <h3>Total Response</h3>
                    <h2>{CustomerMessages ? CustomerMessages.length : '0'}</h2>
                </div>
            </div>
            <div className='dashboard-chart'>
                <CChart
                    type="line"
                    data={{
                        labels: ["Non", "Platinum", "Gold", "Silver", "Diamond"],
                        datasets: [
                            {
                                label: "MemberShip Plans",
                                backgroundColor: "rgba(151, 187, 205, 0.2)",
                                borderColor: "rgba(151, 187, 205, 1)",
                                pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                pointBorderColor: "#fff",
                                data: Membership
                            },
                        ],
                    }}
                />
            </div>
        </div>
    );
};

export default Onboarding;