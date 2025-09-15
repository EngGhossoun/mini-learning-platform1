import { useState } from "react";

export default function Quiz({questions, onFinish}){
  const [answers, setAnswers] = useState({});
  const [result, setResult] = useState(null);

  const handleChange = (qIdx, val) => {
    setAnswers({...answers, [qIdx]: val});
  };

  const handleSubmit = () => {
    let correct = 0;
    questions.forEach((q, idx) => { if(answers[idx] === q.answer) correct++; });
    const score = Math.round((correct / questions.length) * 100);
    setResult(score);
    if(onFinish) onFinish(score);
  };

  return (
    <div className="card p-3 mt-3">
      {questions.map((q, idx) => (
        <div key={idx} className="mb-3">
          <p className="mb-1"><strong>{idx+1}.</strong> {q.question}</p>
          {q.options.map((opt) => (
            <div className="form-check" key={opt}>
              <input className="form-check-input" type="radio" name={`q${idx}`} onChange={() => handleChange(idx, opt)} id={`${idx}-${opt}`} />
              <label className="form-check-label" htmlFor={`${idx}-${opt}`}>{opt}</label>
            </div>
          ))}
        </div>
      ))}
      <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
      {result !== null && <div className="alert alert-info mt-3">Score: {result}%</div>}
    </div>
  );
}