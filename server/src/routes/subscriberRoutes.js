import express from 'express';
import { createSubscriber, fetchSubscribers } from '../controllers/subscriberController.js';
import { validateEmail } from '../middlewares/validator.js';

const router = express.Router();

router.post('/subscribe', validateEmail, createSubscriber);
router.get('/subscribers', fetchSubscribers);

export default router;