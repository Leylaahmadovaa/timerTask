import Navigation from "./components/Navigation/Navigation";
import StopWatch from "./components/StopWatch/StopWatch";
import Timer from "./components/Timer/Timer";
import Watch from "./components/Watch/Watch";
import { Route, Routes } from "react-router-dom";

function App() {
  
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/timer" element={<Timer />} />
        <Route path="/stopwatch" element={<StopWatch />} />
        <Route path="/watch" element={<Watch />} />
      </Routes>
    </>
  );
}

export default App;