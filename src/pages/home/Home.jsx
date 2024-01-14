import React from 'react';
import Chart from '../../components/chart/Chart';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Tables from '../../components/table/Table';
import Widget from '../../components/widget/Widget';
import './Home.scss';
import Datatable from '../../components/datatable/Datatable';

const Home = () => {
    return (
        <div className='home'>
            <Sidebar />
            <div className="homeContainer">
                <Navbar />
                <div style={{marginLeft:'24px',marginTop:'10px',fontSize:'22px'}}>Transaction</div>
                    
                <div className="widgets">
                    <Widget type="order" />
                    <Widget type="earning" />
                    <Widget type="balance" />
                </div>
               
                <div className="listContainer">
                    {/* <Tables /> */}
                    <Datatable />
                </div>
            </div>
        </div>
    )
}

export default Home;