const pool = require('../db'); // สมมติว่าคุณมีไฟล์ db.js สร้าง connection pool ไว้

// ดึง user ตาม id
const getUserById = async (req, res) => {
  const id = req.params.id;
  try {
    const [rows] = await pool.query('SELECT id, username, created_at FROM users WHERE id = ?', [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = {
  getUserById,
};
