import SignIn from './component/Pages/SignIn';
import './App.scss';
import SignUp from './component/Pages/SignUp';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ResetPassword from './component/Pages/ResetPassword';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reset' element={<ResetPassword />} />
      </Routes>
    </div>
  )
}

export default App;
