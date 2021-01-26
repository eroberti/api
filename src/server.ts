import express from 'express';
import userRoute from './routes/user.route';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(userRoute);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
