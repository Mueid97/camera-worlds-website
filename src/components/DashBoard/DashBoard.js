import React from 'react';
import AreaCharts from '../Chart/AreaCharts';
import CustomCharts from '../Chart/CustomCharts';
import './DashBoard.css'
const DashBoard = () => {
    return (
        <div className='chart'>
            <AreaCharts></AreaCharts>
            <CustomCharts></CustomCharts>
        </div>
    );
};

export default DashBoard;