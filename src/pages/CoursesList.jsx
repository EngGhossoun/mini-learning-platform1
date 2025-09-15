import { Link } from "react-router-dom";
import { courses } from "../data/courses";

export default function CoursesList() {
  return (
    <div>
      <h1 className="mb-4">Available Courses</h1>
      <div className="row">
        {courses.map((course) => (
          <div key={course.id} className="col-md-6 mb-3">
            <div className="card p-3 card-hover h-100">
              <h5>{course.title} <small className="text-muted">({course.level})</small></h5>
              <p className="text-muted">{course.description}</p>
              <div className="mb-2">
                {course.tags.map(tag => <span key={tag} className="badge bg-secondary me-1">{tag}</span>)}
              </div>
              <p>Rating: {'⭐'.repeat(course.rating)}</p>
              <Link to={`/courses/${course.id}`} className="btn btn-primary">View Course</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}