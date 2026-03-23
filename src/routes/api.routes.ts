import { Router} from 'express';
import { controller } from '../controller/api.controller';

const router = Router();

router.post('/api', controller)

export default router;