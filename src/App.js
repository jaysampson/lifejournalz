// import SignIn from './component/Pages/SignIn';
import "./App.scss";
// import SignUp from './component/Pages/SignUp';
// import { Route, Routes } from "react-router-dom";
// import ResetPassword from './component/Pages/ResetPassword';
// import LandingPage from './component/Pages/LandingPage';
// import Pricing from './component/Pages/Pricing';
// import About from './component/Pages/About';
// import Terms from './component/Pages/Terms';
// import PrivacyPolicy from './component/PrivacyPolicy';
// import Sidebar from './component/Pages/Sidebar';
// import ContactUs from './component/Pages/ContactUs';
import SignIn from "./component/Pages/SignIn";
import "./App.scss";
import SignUp from "./component/Pages/SignUp";
import { Navigate, Route, Routes } from "react-router-dom";
import ResetPassword from "./component/Pages/ResetPassword";
import LandingPage from "./component/Pages/LandingPage";
import Pricing from "./component/Pages/Pricing";
import About from "./component/Pages/About";
import Terms from "./component/Pages/Terms";
import PrivacyPolicy from "./component/PrivacyPolicy";
// import Sidebar from "./component/Pages/Sidebar";
import ContactUs from "./component/Pages/ContactUs";
import Dashboard from "./component/Pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import SingleJournal from "./component/Pages/DashPages/SingleJournal";
import LearnMore from "./component/Pages/LearnMore";
import { Pricee } from "./component/Pages/DashPages/Pricee";

const App = () => {
  const auth = localStorage.getItem("jwt");
  const currentUser = auth;
  const RequiredAuth = ({children }) => {
    return currentUser ? children : <Navigate to="/signin" />;
  };

  // console.log(currentUser, "currentUser");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/price" element={<Pricee />} />
        <Route path="/contactus" element={<ContactUs />} />
        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset" element={<ResetPassword />} />
        <Route path="/learn" element={<LearnMore />} />
        <Route
          path="/dashboard"
          element={
            <RequiredAuth>
              <Dashboard />
            </RequiredAuth>
          }
        />
        <Route
          path="/dashboard/:id"
          element={
            <RequiredAuth>
              <SingleJournal />
            </RequiredAuth>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
