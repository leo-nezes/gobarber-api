import { Router } from 'express';
import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

/**
 * Independente do método HTTP utilizado, todas as requisições feitas no caminho /appointments serão enviadas para o appointments.routes.ts por conta do método use() utilizado.
 */

export default routes;
