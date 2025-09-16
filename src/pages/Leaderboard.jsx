const students = [
  { name: "Noor alhuda", progress: 100 },
  { name: "Ali", progress: 80 },
  { name: "Ghossoun", progress: 100 },
  { name: "zhraa", progress: 68 },
  { name: "Mohammed", progress: 89 },
  { name: "Ahmad", progress: 44 },
  { name: "Omar", progress: 0 },
  { name: "Youssef", progress: 70 },
  { name: "Ibrahim", progress: 30 },
  { name: "Mustafa", progress: 90 },
  { name: "Tareq", progress: 23 },
  { name: "Zaid", progress: 82 },
  { name: "Anas", progress: 19 },
  { name: "Rania", progress: 64 },
  { name: "Dalia", progress: 56 },
  { name: "Hanan", progress: 45 },
  { name: "Heba", progress: 43 },
  { name: "Maha", progress: 21 }
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