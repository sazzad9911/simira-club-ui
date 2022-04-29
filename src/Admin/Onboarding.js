import React from 'react';
import './css/Dashboard.css'
import { CChart } from '@coreui/react-chartjs';

const Onboarding = () => {
    return (
        <div style={{ height: '100%', overflowY: 'scroll', padding: '10px' }}>
            <div className="item-container">
                <div style={{ backgroundColor: '#F8C471' }} className="dashboard-item">
                    <h3>Total Hotels</h3>
                    <h2>342</h2>
                </div>
                <div style={{ backgroundColor: '#E59866' }} className="dashboard-item">
                    <h3>Total Brands</h3>
                    <h2>342</h2>
                </div>
                <div style={{ backgroundColor: '#ABEBC6' }} className="dashboard-item">
                    <h3>Total Users</h3>
                    <h2>342</h2>
                </div>
                <div style={{ backgroundColor: '#85C1E9' }} className="dashboard-item">
                    <h3>Total Bookings</h3>
                    <h2>342</h2>
                </div>
                <div style={{ backgroundColor: '#D7BDE2' }} className="dashboard-item">
                    <h3>Total Orders</h3>
                    <h2>342</h2>
                </div>
                <div style={{ backgroundColor: '#F9E79F' }} className="dashboard-item">
                    <h3>Total Response</h3>
                    <h2>342</h2>
                </div>
            </div>
            <div className='dashboard-chart'>
                <CChart
                    type="line"
                    data={{
                        labels: ["January", "February", "March", "April", "May", "June", "July"],
                        datasets: [
                            {
                                label: "My First dataset",
                                backgroundColor: "rgba(220, 220, 220, 0.2)",
                                borderColor: "rgba(220, 220, 220, 1)",
                                pointBackgroundColor: "rgba(220, 220, 220, 1)",
                                pointBorderColor: "#fff",
                                data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
                            },
                            {
                                label: "My Second dataset",
                                backgroundColor: "rgba(151, 187, 205, 0.2)",
                                borderColor: "rgba(151, 187, 205, 1)",
                                pointBackgroundColor: "rgba(151, 187, 205, 1)",
                                pointBorderColor: "#fff",
                                data: [50, 12, 28, 29, 7, 25, 12, 70, 60]
                            },
                        ],
                    }}
                />
            </div>
        </div>
    );
};

export default Onboarding;