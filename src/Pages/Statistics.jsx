import React, { useState, useEffect } from "react";
import "./Styles/Statistics.css";
import { PieChart, Pie, Tooltip, BarChart, XAxis, YAxis, Legend, CartesianGrid, Bar , ResponsiveContainer} from "recharts";
import Sidebar from "../components/Sidebar";
import axios from 'axios';
import DashFooter from "./DashFooter";

const Statistics = () => {

// URLs to access the database
const Instructor_URL = `http://localhost:${process.env.REACT_APP_PORT}/instructors`;
const Trainee_URL = `http://localhost:${process.env.REACT_APP_PORT}/trainees`;

// Functions to fetch data from database
const instructor_fetchHandler = async() => {
return await axios.get(Instructor_URL).then((res) => res.data);
};

const trainee_fetchHandler = async() => {
return await axios.get(Trainee_URL).then((res) => res.data);
};

// State to hold the fetched data
const [instructors, setInstructors] = useState([]);
const [trainees, setTrainees] = useState([]);

// Use useEffect to handle the fetched data
useEffect(() => {
instructor_fetchHandler().then((data) => setInstructors(data.instructors));
}, []);

useEffect(() => {
trainee_fetchHandler().then((data) => setTrainees(data.trainees));
}, []);

// Count the array length from instructors and trainees collections
const total_instructors = instructors.length;
const total_trainees = trainees.length;

// Data to represent on graph
const data = [
{ name: "Total Instructors", users: total_instructors },
{ name: "Total Trainees", users: total_trainees },
{ name: "Golf Instructors", users: 2 },
{ name: "Badminton Instructors", users: 4 },
{ name: "Cricket Instructors", users: 3 },
];

// Render the graphs
return (
<div>

<Sidebar />
<div className="container">
  <div className="data">
  <h1>Statistics</h1>

      <PieChart width={400} height={400}>
        <Pie
          dataKey="users"
          isAnimationActive={true}
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={80}
          fill="#AFE340"
          label
          interval={2000}
        />
        <Tooltip />
      </PieChart>

      <BarChart
              width={800}
              height={300}
              data={data}
              isAnimationActive={true}
              margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
              barSize={40}
          >
              <XAxis dataKey="name" scale="point" padding={{ left: 20, right: 10 }} />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="users" fill="#AFE340" background={{ fill: "#eee" }} />
          </BarChart>
          </div>
         
      </div>
      <DashFooter/>
      </div>
);
};

export default Statistics;






