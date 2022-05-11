import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Editor from "./Pages/Editor";

function App() {

 


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/editor" element={<Editor />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
