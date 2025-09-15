import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursesList from "./pages/CoursesList";
import CourseDetails from "./pages/CourseDetails";
import LessonDetails from "./pages/LessonDetails";
import FinalQuizPage from "./pages/FinalQuiz";
import Leaderboard from "./pages/Leaderboard";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<CoursesList />} />
          <Route path="/courses/:id" element={<CourseDetails />} />
          <Route path="/courses/:id/lessons/:lessonId" element={<LessonDetails />} />
          <Route path="/courses/:id/final" element={<FinalQuizPage />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;