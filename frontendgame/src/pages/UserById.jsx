import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './UserById.css';

export default function UserById() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get(`/api/users/${id}`);
        setUser(res.data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch user');
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading) return <p className="loading">Loading user data...</p>;

  if (error) return <p className="error">{error}</p>;

  if (!user) return <p className="noData">No user data found.</p>;

  return (
    <div className="container">
      <h2 className="title">User Details</h2>
      <p><span className="label">ID:</span> <span className="value">{user.id}</span></p>
      <p><span className="label">Username:</span> <span className="value">{user.username}</span></p>
      <p><span className="label">Created At:</span> <span className="value">{new Date(user.created_at).toLocaleString()}</span></p>
    </div>
  );
}
