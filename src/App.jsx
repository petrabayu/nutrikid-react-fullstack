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
import ArticleSearch from "./Pages/ArticleSearch";
import ArticleContent from "./Pages/ArticleContent";
import ArticleInput from "./Pages/ArticleInput";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard";
import QRCodeComponent from "./Components/Consultation/QRCodeComponent";
import QRCodePayment from "./Components/Events/QRCodePayment";
import PaymentSuccess from "./Components/Consultation/PaymentSucces";
import PaymentFailed from "./Components/Consultation/PaymentFailed";
import PaymentDone from "./Components/Events/PaymentDone";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarFooter />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/program" element={<ProgramDisplayPage />} />
            <Route path="/event/:eventId" element={<EventDetailPage />} />
            <Route path="/program/:programId" element={<ProgramDetailPage />} />
            <Route path="/konsultasi" element={<Consultation />} />
            <Route path="/payment" element={<QRCodeComponent />} />
            <Route path="/payment/success" element={<PaymentSuccess />} />
            <Route path="/:string/:id/payment" element={<QRCodePayment />} />
            <Route path="/:string/:id/payment/success" element={<PaymentDone />} />
            <Route path="/payment/failed" element={<PaymentFailed />} />
            <Route path="/artikel/*" element={<ArticleSearch />} />
            <Route
              path="/artikel/:id"
              render={(props) => <ArticleContent {...props} cards={cards} />}
              element={<ArticleContent />}
            />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/detail" element={<ArticleContent />} />
          <Route
            path="/program/:programId/:moduleId"
            element={<ProgramPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
