import React from 'react';
import { useSelector } from 'react-redux';
import './css/Dashboard.css'
import { CChart } from '@coreui/react-chartjs';
import { AdminHeader } from '../Components/Header';
import Onboarding from './Onboarding';
import PageSettings from './PageSettings';

const Dashboard = () => {
    const User = useSelector(state => state.User)
    const [drawer, setDrawer] = React.useState(false)
    const [option, setOption] = React.useState('Dashboard')
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
            }}>
                <AdminHeader setOption={setOption}
                    option={option} drawer={drawer} setDrawer={setDrawer} />
            </div>
            <div style={{ height: '100%', overflowY: 'scroll' }}>
                {
                    option == 'Dashboard' ? (
                        <Onboarding />
                    ) : option == 'Page Settings' ? (
                        <PageSettings />
                    ) :
                    (
                        <div></div>
                    )
                }
            </div>
        </div>
    );
};

export default Dashboard;