import SignIn from './component/Pages/SignIn';
import './App.scss';
import SignUp from './component/Pages/SignUp';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from './component/Pages/ResetPassword';
import LandingPage from './component/Pages/LandingPage';
import Dashboard from './component/Pages/Dashboard';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reset' element={<ResetPassword />} />
      </Routes>
    </div>
  )
}

export default App;
