import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ShareLayout from "./pages/ShareLayout";
import Login from "./pages/Login";
import User from "./pages/User";
import Diploma from "./pages/Diploma";
import DiplomaType from "./pages/DiplomaType";
import Rank from "./pages/Rank";
import TrainingProgram from "./pages/TrainingProgram";
import TrainingType from "./pages/TrainingType";

function App() {
  const [user, setUser] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShareLayout />}>
          <Route index element={<Login user={user} setUser={setUser} />} />
          <Route path="/user" element={<User />} />
          <Route path="/diploma" element={<Diploma />} />
          <Route path="/diploma-type" element={<DiplomaType />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/training-program" element={<TrainingProgram />} />
          <Route path="/training-type" element={<TrainingType />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
