import { useParams, Link, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import ProgressBar from "../components/ProgressBar";
import { useState } from "react";

export default function CourseDetails() {
  const { id } = useParams();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return <p className="text-danger">Course not found.</p>;
  }

  const [localCourse, setLocalCourse] = useState(course);
  const navigate = useNavigate();

  const completedLessons = localCourse.lessons.filter((l) => l.completed).length;
  const progress = Math.round((completedLessons / localCourse.lessons.length) * 100);

  return (
    <div style={{ backgroundColor: "rgba(154, 175, 181, 0.45)", padding: "20px", borderRadius: "8px" }}>
      <h2>{localCourse.title}</h2>
      <p className="text-muted">{localCourse.description}</p>
      <ProgressBar progress={progress} />

      <h5 className="mt-4">Lessons</h5>
      <ul className="list-group">
        {localCourse.lessons.map((lesson) => (
          <li key={lesson.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{lesson.title}</span>
            <div>
              {lesson.completed && <span className="badge bg-success me-2">Completed</span>}
              <Link
                to={`/courses/${localCourse.id}/lessons/${lesson.id}`}
                className="btn btn-sm btn-outline-primary"
              >
                Open
              </Link>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-3">
        {completedLessons === localCourse.lessons.length ? (
          <Link
            to={`/courses/${localCourse.id}/final`}
            className="btn btn-success"
          >
            Take Final Quiz
          </Link>
        ) : (
          <p className="text-muted mt-2">Complete all lessons to unlock the final quiz.</p>
        )}
      </div>
    </div>
  );
}