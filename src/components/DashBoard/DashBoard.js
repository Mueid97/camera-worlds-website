import React from 'react';
import AreaCharts from '../Chart/AreaCharts';
import CustomCharts from '../Chart/CustomCharts';
import './DashBoard.css'
const DashBoard = () => {
    return (
        <div className='grid sm:grid-cols-1 lg:grid-cols-2 gap-20 mt-20 lg:px-24'>
            <AreaCharts></AreaCharts>
            <CustomCharts></CustomCharts>
        </div>
    );
};

export default DashBoard;