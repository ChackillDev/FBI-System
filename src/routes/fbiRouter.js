import Router from 'express'
const fbiRouter = Router();
import { login,acceso } from '../controllers/fbi.controller.js';

fbiRouter.get('/login', login);
fbiRouter.get('/acceso', acceso);

export default fbiRouter;
