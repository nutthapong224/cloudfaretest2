import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ setAuth }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    const refreshToken = localStorage.getItem('refreshToken');
    try {
      await axios.post(`/api/auth/logout`, { token: refreshToken });
    } catch (err) {
      console.error('Logout error', err);
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    setAuth(false);
    navigate('/login');
  };

  // ฟังก์ชันกดปุ่มไปหน้า user by id (สมมติ id = 1)
  const goToUserById = () => {
    const userId = 1; // เปลี่ยนเป็น id ที่ต้องการ หรือจะรับจาก input ก็ได้
    navigate(`/users/${userId}`);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, you are logged in!</p>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={goToUserById} style={{ marginLeft: '10px' }}>
        Go to User by ID
      </button>
    </div>
  );
}
