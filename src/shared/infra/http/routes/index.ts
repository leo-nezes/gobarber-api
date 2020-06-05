import { Router } from 'express';
import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments.routes';
import usersRouter from '@modules/users/infra/http/routes/users.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

/**
 * Independente do método HTTP utilizado, todas as requisições feitas no caminho /appointments serão enviadas para o appointments.routes.ts por conta do método use() utilizado.
 */

export default routes;
