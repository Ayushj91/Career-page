const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();
const keys=["IT Support Specialist", "Product Designer" ]
const ExperienceLevel = ["Intern", "Entry Level", "Associate", "Mid-Senior Level", "Director", "Executive"];
app.use(cors());

const mongoDB = 'mongodb://127.0.0.1:27017/Jobs-Data';
mongoose.connect(mongoDB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB!');
  })
  .catch((err) => {
    console.error(err);
  });

const Job = require('./models/Job');

app.get('/api/jobs', async (req, res) => {
  try {
    const jobs = await Job.find({ experienceLevel : { $in: ExperienceLevel } });
    res.json(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  
});
