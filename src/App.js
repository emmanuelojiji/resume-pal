import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Editor from "./Pages/Editor";
import { UserInfoProvider } from "./Contexts/UserInfoContext";

function App() {
  return (
    <div className="App">
      <UserInfoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/editor" element={<Editor />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </UserInfoProvider>
    </div>
  );
}

export default App;
