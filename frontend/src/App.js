import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/addTask" element={<AddTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;