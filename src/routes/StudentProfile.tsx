import { Avatar, Box, Button, Divider, Paper, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const StudentProfile = () => {
	const { id } = useParams();
	const [student, setStudent] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		axios
			.get(`http://localhost:3000/api/students/${id}`)
			.then((res) => setStudent(res.data))
			.catch((err) => {
				console.log("error occurred: ", err);
				navigate("/");
			});
	}, [id, navigate]);

	if (!student) return <Typography p={3}>Loading...</Typography>;

	return (
		<Box p={4}>
			<Paper elevation={3} sx={{ p: 4 }}>
				<Box display="flex" alignItems="center" gap={3}>
					<Avatar
						sx={{ width: 80, height: 80, bgcolor: "primary.main" }}
					>
						{student.name.charAt(0)}
					</Avatar>
					<Box>
						<Typography variant="h5">{student.name}</Typography>
						<Typography variant="subtitle1">
							Roll: {student.rollNumber}
						</Typography>
						<Typography variant="subtitle2">
							Stream: {student.stream}
						</Typography>
						<Typography variant="subtitle3">
							Grade: {student.grade}
						</Typography>
					</Box>
				</Box>
				<Divider sx={{ my: 3 }} />
				<Box>
					<Typography variant="h6">Parent Details</Typography>
					<Typography>
						<strong>Father:</strong> {student.parent.fatherName} (
						{student.parent.fatherPhone})
					</Typography>
					<Typography>
						<strong>Mother:</strong> {student.parent.motherName} (
						{student.parent.motherPhone})
					</Typography>
				</Box>

				<Box mt={3}>
					<Button
						variant="contained"
						onClick={() => navigate("/students")}
					>
						Back to Dashboard
					</Button>
				</Box>
			</Paper>
		</Box>
	);
};

export default StudentProfile;
