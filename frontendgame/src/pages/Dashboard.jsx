import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ setAuth }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      await axios.post(`${import.meta.env.VITE_API_BASE_URL}/logout`, { token: refreshToken });
    } catch (err) {
      console.error('Logout error', err);
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAuth(false);
    navigate('/login');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, you are logged in!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
