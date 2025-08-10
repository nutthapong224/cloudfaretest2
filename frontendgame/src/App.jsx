import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import UserById from './pages/UserById';

export default function App() {
  const [auth, setAuth] = useState(!!localStorage.getItem('accessToken'));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users/:id" element={<UserById />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Dashboard setAuth={setAuth} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
