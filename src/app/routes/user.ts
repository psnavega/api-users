import express from 'express';
import {
    getUserController,
    getUsersController,
    postUserController,
    patchUserController,
    deleteUserController
} from '@controllers/userController';

const router = express.Router();

router
    .get('/users', getUsersController)
    .get('/user/:id', getUserController)
    .post('/user', postUserController)
    .patch('/user', patchUserController)
    .delete('/user', deleteUserController)

export default router;