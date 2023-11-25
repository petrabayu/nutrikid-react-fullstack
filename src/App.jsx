import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Consultation from "./Pages/Consultation";
import Login from "./Components/LoginRegister/Login";
import Register from "./Components/LoginRegister/Register";

import ProgramDisplayPage from "./Pages/ProgramEvent/ProgramDisplayPage";
import EventDetailPage from "./Pages/ProgramEvent/EventDetailPage";
import ProgramDetailPage from "./Pages/ProgramEvent/ProgramDetailPage";
import ProgramPage from "./Pages/ProgramEvent/ProgramPage";
import HomePage from "./Pages/HomePage";
import NavbarFooter from "./Layouts/NavbarFooterLayout";
import ArticleMain from "./Pages/ArticleMain";
import ArticleDetail from "./Pages/ArticleDetail";
import ArticleInput from "./Pages/ArticleInput";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarFooter />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Program" element={<ProgramDisplayPage />} />
            <Route path="/events/1" element={<EventDetailPage />} />
            <Route path="/program/1" element={<ProgramDetailPage />} />
            <Route path="/program/1/1" element={<ProgramPage />} />
            <Route path="/konsultasi" element={<Consultation />} />
            <Route path="/artikel" element={<ArticleMain />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/detail" element={<ArticleDetail />} />
          <Route path="/input" element={<ArticleInput />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
