import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/tasks">Tasks</Link>
      </nav>
    </div>
  );
}

export default App;
