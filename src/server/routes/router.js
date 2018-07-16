import express from 'express';
import Controller from '../controllers/controller';

const router = express.Router({ strict: true });

// Get Main Page
router.get('/', Controller);
router.get('*', Controller);

export default router;
