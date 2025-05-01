import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Status from './pages/status';
import { ToastContainer } from 'react-toastify';
import "./index.css";



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ToastContainer position="top-center" autoClose={1000} icon={false} />
      <Routes>
        <Route path="/" element={<Status />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
