// src/pages/Dashboard.jsx

import React, { useEffect, useState } from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import axios from "axios";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie, Bar } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

const Dashboard = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/students").then((res) => {
      setStudents(res.data);
    });
  }, []);

  const genderCount = students.reduce((acc, student) => {
    const gender = student.gender.toLowerCase();
    acc[gender] = (acc[gender] || 0) + 1;
    return acc;
  }, {});

  const gradeCount = students.reduce((acc, student) => {
    acc[student.grade] = (acc[student.grade] || 0) + 1;
    return acc;
  }, {});

  const streamCount = students.reduce((acc, student) => {
    acc[student.stream] = (acc[student.stream] || 0) + 1;
    return acc;
  }, {});

  const pieData = {
    labels: Object.keys(genderCount),
    datasets: [
      {
        data: Object.values(genderCount),
        backgroundColor: ["#42a5f5", "#ef5350", "#ab47bc"],
        borderWidth: 1,
      },
    ],
  };

  const gradeBarData = {
    labels: Object.keys(gradeCount),
    datasets: [
      {
        label: "Students per Grade",
        data: Object.values(gradeCount),
        backgroundColor: "#66bb6a",
      },
    ],
  };

  const streamBarData = {
    labels: Object.keys(streamCount),
    datasets: [
      {
        label: "Students per Stream",
        data: Object.values(streamCount),
        backgroundColor: "#ffa726",
      },
    ],
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Student Dashboard
      </Typography>

      <Grid container spacing={4}>
        {/* Gender Pie */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Gender-wise Count
            </Typography>
            <Pie data={pieData} />
          </Paper>
        </Grid>

        {/* Grade Bar */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Grade-wise Distribution
            </Typography>
            <Bar data={gradeBarData} />
          </Paper>
        </Grid>

        {/* Stream Bar */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Stream-wise Segregation
            </Typography>
            <Bar data={streamBarData} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
