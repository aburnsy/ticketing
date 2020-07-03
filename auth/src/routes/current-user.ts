import express from 'express';
import { currentUser } from '@burnstickets/common';

const router = express.Router();

router.get('/api/users/currentuser', currentUser, (req, res) => {
  res.send({ currentUser: req.currentUser || null }); //send null rather than undefined
});

export { router as currentUserRouter };
