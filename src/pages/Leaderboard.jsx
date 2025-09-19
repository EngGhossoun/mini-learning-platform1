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

export default function Leaderboard() {
  return (
    <div className="p-4" style={{ backgroundColor: 'rgba(154, 175, 181, 0.45)', borderRadius: '10px' }}>
      <h3 className="text-white mb-3">Leaderboard</h3>
      <ul className="list-group" style={{ backgroundColor: 'transparent', border: 'none' }}>
        {students.map((s, idx) => (
          <li
            key={s.name}
            className="list-group-item d-flex justify-content-between align-items-center"
            style={{ 
              backgroundColor: 'rgba(76, 100, 111, 0.59)', 
              color: 'white',
              border: '1px solid rgba(23, 17, 17, 0.3)',
              marginBottom: '5px',
              borderRadius: '5px'
            }}
          >
            {idx + 1}. {s.name}
            <span className="badge" style={{ backgroundColor: 'rgba(0,123,255,0.6)' }}>
              {s.progress}%
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}