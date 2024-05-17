import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SignUP from './components/Signup.tsx';
import SignIn from './components/Signin.tsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <BrowserRouter>    
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/SignUp" element={<SignUP />} />
    <Route path="/SignIn" element={<SignIn />} />
  </Routes>
  </BrowserRouter>

  </React.StrictMode>,
)
