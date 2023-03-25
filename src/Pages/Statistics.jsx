import React from "react";
import "./Styles/Statistics.css";
import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import Sidebar from "../components/Sidebar";

const Statistics = () => {
  const data = [
    { name: "Instructors", users: 10 },
    { name: "Total Trainees", users: 30 },
    { name: "Golf", users: 2 },
    { name: "Badminton", users: 4 },
    { name: "cricket", users: 3 },
    // { name: "Golf", users: 2 },
    // { name: "Badminton", users: 4 },
    // { name: "cricket", users: 3 },
    
  ];

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className='container'>
      
        
        <div className="data">
        <h1>Statistics</h1>
        
        <PieChart width={400} height={400}>
          <Pie
            dataKey="users"
            isAnimationActive={true}
            data={data}
            cx={200}
            cy={200}
            outerRadius={80}
            fill="#AFE340"
            label
          />
          <Tooltip />
        </PieChart>
        <BarChart
          width={800}
          height={300}
          data={data}
          isAnimationActive={true}
          margin={{
            top: 5,
            right: 30,
            left: 80,
            bottom: 5,
          }}
          barSize={40}
        >
          <XAxis
            dataKey="name"
            scale="point"
            padding={{ left: 20, right: 10 }}
          />
          <YAxis />
          <Tooltip />
          <Legend />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="users" fill="#AFE340" background={{ fill: "#eee" }} />
        </BarChart>
        </div>
        
      
     
      </div>
    </div>
  );
};

export default Statistics;

