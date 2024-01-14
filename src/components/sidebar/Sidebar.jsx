import React, { useContext } from 'react';
import './Sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import StoreIcon from '@mui/icons-material/Store';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import PsychologyAltOutlinedIcon from '@mui/icons-material/PsychologyAltOutlined';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../../utils/c23ff5_1f9f35b054ba4407a1676bbd76017894~mv2.webp'
import { DarkModeContext } from '../../context/darkModeContext';

const Sidebar = () => {
    const location = useLocation();
  const { pathname } = location;
    const { dispatch } = useContext(DarkModeContext);
   

    return (
        <div className='sidebar'>
            <div className="top">
                <NavLink to="/" style={{ textDecoration: "none" }} >
                    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center',color:'#19C581',fontWeight:'700'}}>
                    <img src={logo} alt='No image' width='50' /> <span>Charge City</span>

                    </div>
                </NavLink>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <NavLink to="/"  style={{ textDecoration: "none" }} >
                        <li className={pathname == '/' ? 'active-link' : ''}>
                            <CreditCardIcon className="icon active-logo" />
                            <span>Transaction</span>
                        </li>
                    </NavLink>
                    <p className="title">LISTS</p>
                    {/* <NavLink to="/users"  style={{ textDecoration: "none" }} >
                        <li className={pathname == '/users' ? 'active-link' : ''}>
                            <PersonOutlinedIcon className={ pathname == '/users' ? 'active-logo' : 'logo'} />
                            <span className={ pathname == '/users' ? 'active-logo' : ''} >Users</span>
                        </li>
                    </NavLink> */}

                    <NavLink to="/products"  style={{ textDecoration: "none" }} >
                        <li className={pathname === '/products' ? 'active-link' : ''}>
                            <StoreIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </NavLink>
                    <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>

                    <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Notifications</span>
                    </li>

                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyAltOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Settings</span>
                    </li>

                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            {/* <div className="bottom">
                <div 
                    className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}></div>
                <div 
                    className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}></div>
            </div> */}
        </div>
    )
}

export default Sidebar;