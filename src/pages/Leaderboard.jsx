const students = [
  { name: "Noor", progress: 92 },
  { name: "Ali", progress: 80 },
  { name: "Ghossoun", progress: 100 },
  { name: "Huda", progress: 68 }
].sort((a,b) => b.progress - a.progress);

export default function Leaderboard(){
  return (
    <div>
      <h3>Leaderboard</h3>
      <ul className="list-group">
        {students.map((s, idx) => <li key={s.name} className="list-group-item d-flex justify-content-between align-items-center">{idx+1}. {s.name}<span className="badge bg-primary">{s.progress}%</span></li>)}
      </ul>
    </div>
  );
}