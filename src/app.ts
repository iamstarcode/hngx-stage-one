import express, { Request, Response } from 'express';
const app = express();

// database connections

// routes
app.get('/api', (req: Request, res: Response) => {
  const slack_name = req.query.slack_name;
  const track = req.query.track;

  const currentDate = new Date();
  const dayOfWeek = currentDate.getDay();
  const dayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const current_date = dayNames[dayOfWeek];

  const currentUTCTime = currentDate.getTime();

  const data = {
    slack_name,
    current_date,
    utc_time: currentDate.toISOString(),
    track,
    //file
    //repo
    status_code: 200,
  };

  res.json(data);
});

const APP_PORT = 8000;

app.listen(APP_PORT, () => {
  console.log(`Server started on port ${APP_PORT}`);
});
