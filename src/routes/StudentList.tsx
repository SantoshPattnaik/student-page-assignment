import { useEffect, useState } from "react";
import axios from "axios";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import SchoolIcon from "@mui/icons-material/School";
import { useNavigate } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/students")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log("Error occured: ", err));
  }, []);

  return (
    <div>
      <Box p={3}>
        <Typography variant="h4" gutterBottom>
          All Students
        </Typography>
        <Grid container spacing={3}>
          {students.map((student) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={student.id}>
              <Card sx={{ minHeight: 230 }}>
                <CardContent>
                  <Box display="flex" alignItems={"center"} gap={2}>
                    <Avatar sx={{ bgcolor: "#1976d2" }}>
                      <SchoolIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="h6">{student.name}</Typography>
                      <Typography variant="body2">{student.stream}</Typography>
                    </Box>
                  </Box>
                  <Box mt={2}>
                    <Typography variant="body2">
                      <strong>Roll: </strong>
                      {student.rollNumber}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Grade: </strong>
                      {student.grade}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Gender: </strong>
                      {student.gender}
                    </Typography>
                    <Typography variant="body2">
                      <strong>Phone: </strong>
                      {student.phone}
                    </Typography>
                  </Box>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => navigate(`/student/${student.id}`)}
                  >
                    View Profile
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default StudentList;
