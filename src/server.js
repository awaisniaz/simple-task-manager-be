require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const taskRoutes = require('./routes/task.route');

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'Pong' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
