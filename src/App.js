import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import CreateService from "./pages/CreateService";
import UserInputModal from "./pages/UserInputModal"
import CreateNewIDPage from "./pages/CreateNewIDPage"

function App() {

  return (
    <div className="App">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/join" element={<UserInputModal />} />
        <Route path="/create" element={<CreateService />} />
        <Route path="/newid" element={<CreateNewIDPage />} />
      </Routes>
    </div>
  );
}

export default App;
