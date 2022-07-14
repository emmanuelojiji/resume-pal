import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Editor from "./Pages/Editor";
import { UserInfoProvider } from "./Contexts/UserInfoContext";
import { DesignerInfoProvider } from "./Contexts/DesignerContext";

function App() {
  return (
    <div className="App">
      <UserInfoProvider>
        <DesignerInfoProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/editor" element={<Editor />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </DesignerInfoProvider>
      </UserInfoProvider>
    </div>
  );
}

export default App;
