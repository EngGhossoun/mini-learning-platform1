import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Loading from "./components/Loading";
import "./index.css";

function Root() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return loading ? <Loading /> : <App />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);