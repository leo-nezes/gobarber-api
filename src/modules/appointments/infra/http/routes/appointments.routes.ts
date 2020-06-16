import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';

const appointmentsRouter = Router();
const apointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);
// executa o middleware ensureAuthenticated toda vez que uma requisição é realizada para o caminho /appointments.

// appointmentsRouter.get('/', async (request, response) => {
//   const appointments = await appointmentsRepository.find();

//   return response.json(appointments);
// });

appointmentsRouter.post('/', apointmentsController.create);

export default appointmentsRouter;
