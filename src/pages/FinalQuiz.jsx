import { useParams, useNavigate } from "react-router-dom";
import { courses } from "../data/courses";
import Quiz from "../components/Quiz";
import jsPDF from "jspdf";

export default function FinalQuizPage(){
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === parseInt(id));

  const handleFinish = (score) => {
    if(score >= 70){
      const doc = new jsPDF();
      doc.setFontSize(22);
      doc.text('Certificate of Completion', 60, 40);
      doc.setFontSize(14);
      doc.text(`This certifies that you have completed the course:`, 30, 70);
      doc.setFontSize(16);
      doc.text(course.title, 30, 90);
      doc.save(`${course.title}_certificate.pdf`);
    } else {
      alert('You need at least 70% to pass. Your score: ' + score + '%');
    }
  };

  return (
    <div>
      <h3>Final Quiz - {course.title}</h3>
      <Quiz questions={course.finalQuiz} onFinish={handleFinish} />
      <div className="mt-3">
        <button className="btn btn-secondary me-2" onClick={() => navigate(-1)}>Back</button>
      </div>
    </div>
  );
}