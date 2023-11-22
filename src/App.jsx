import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css";

import ProgramDisplayPage from "./Pages/ProgramEvent/ProgramDisplayPage";
import EventDetailPage from "./Pages/ProgramEvent/EventDetailPage";
import ProgramDetailPage from "./Pages/ProgramEvent/ProgramDetailPage";
import ProgramPage from './Pages/ProgramEvent/ProgramPage';
import HomePage from './Pages/HomePage';
import NavbarFooter from './Layouts/NavbarFooterLayout'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
              <Route path='/' element ={<NavbarFooter />}>
                <Route path="/" element={<HomePage />}/>
                <Route path="/Program" element={<ProgramDisplayPage />} />
                <Route path="/events/1" element={<EventDetailPage />} />
                <Route path="/program/1" element={<ProgramDetailPage />} />
                <Route path="/program/1/1" element={<ProgramPage />} />
              </Route>
        </Routes>
      </BrowserRouter>
      
    </>
  );
}

export default App;
