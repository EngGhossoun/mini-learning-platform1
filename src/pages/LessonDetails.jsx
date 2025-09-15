import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import { useState } from "react";
import Quiz from "../components/Quiz";

export default function LessonDetails() {
  const { id, lessonId } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));
  const lesson = course.lessons.find((l) => l.id === parseInt(lessonId));
  const [completed, setCompleted] = useState(lesson.completed);
  const [showToast, setShowToast] = useState(false);

  const handleComplete = () => {
    lesson.completed = true;
    setCompleted(true);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  return (
    <div>
      <h3>{lesson.title}</h3>
      {lesson.image && <img src={lesson.image} alt={lesson.title} className="img-fluid mb-3 rounded" />}
      {lesson.video && <div className="ratio ratio-16x9 mb-3"><iframe src={lesson.video} title={lesson.title} allowFullScreen></iframe></div>}
      <p>{lesson.content}</p>

      {!completed ? (
        <button className="btn btn-success" onClick={handleComplete}>Mark as Complete</button>
      ) : (
        <div className="alert alert-success">✅ Lesson Completed</div>
      )}

      {showToast && <div className="toast-fixed"><div className="toast show align-items-center text-white bg-success border-0"><div className="d-flex"><div className="toast-body">🎉 أحسنت! أنهيت الدرس</div><button type="button" className="btn-close btn-close-white me-2 m-auto" onClick={() => setShowToast(false)}></button></div></div></div>}

      <h4 className="mt-4">Mini Quiz</h4>
      {lesson.quiz ? <Quiz questions={lesson.quiz} /> : <p className="text-muted">No quiz for this lesson.</p>}
    </div>
  );
}