import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Dashboard from "./routes/Dashboard";
import StudentList from "./routes/StudentList";
import StudentProfile from "./routes/StudentProfile";

function App() {
	return (
		<BrowserRouter>
			<NavBar />
			<Routes>
				<Route path="/" element={<Dashboard />} />
				<Route path="/students" element={<StudentList />} />
				<Route path="/student/:id" element={<StudentProfile />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
