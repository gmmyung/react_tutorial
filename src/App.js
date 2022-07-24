import Home from "./routes/Home"
import Detail from "./routes/Detail"
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        <Route path="/react_tutorial_2" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
