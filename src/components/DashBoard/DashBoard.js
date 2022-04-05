import React from 'react';
import { Bar, BarChart, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import './DashBoard.css'
const DashBoard = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401,
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500,
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010,
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405,
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900,
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000,
        },
    ];
    return (
        <div className='parent-chart-container'>
            <div className="my-5">
                <h2>Showing <span className='header-color'>Months and sell</span></h2>
                <LineChart width={500} height={300} data={data}>
                    <Line dataKey={"month"}></Line>

                    <Line dataKey={"sell"}></Line>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </LineChart>
            </div>
            <div>
                <h2>Showing <span className='header-color'>Revenue and Investment</span></h2>
                <BarChart width={500} height={300} data={data}>
                    <Bar dataKey={"revenue"}></Bar>
                    <Bar style={{ backgroundColor: "orange" }} dataKey={"investment"}></Bar>
                    <XAxis></XAxis>
                    <YAxis></YAxis>
                    <Tooltip></Tooltip>
                    <Legend></Legend>
                </BarChart>
            </div>
        </div>
    );
};

export default DashBoard;