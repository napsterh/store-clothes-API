import { Router } from 'express';
const router = Router();

import * as userCtrl from "../controllers/user.controller";

router.get('/users/signup', userCtrl.renderSignUpForm);

router.post('/users/signup', userCtrl.signup);

router.get('/users/signin', userCtrl.renderSigninForm);

router.post('/users/signin', userCtrl.signin);

router.get('/users/logout', userCtrl.logout);


export default router;
