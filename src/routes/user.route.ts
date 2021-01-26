import express from 'express';
import userController from '../controllers/user.controller';

const userRoute = express.Router();

userRoute.get('/users', userController.all);
userRoute.get('/users/:id', userController.read);
userRoute.post('/users', userController.create);
userRoute.put('/users/:id', userController.update);
userRoute.delete('/users/:id', userController.remove);

export default userRoute;
