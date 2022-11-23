//External
import { Router } from 'express';
import { check } from 'express-validator';

//Internal
import { login } from '../controllers/index.js';
import { emailNoExist } from '../helpers/index.js';
import {
	validateFields,
	validatePassword
} from '../middlewares/index.js';

const routerLogin = Router();

routerLogin.post("/", [
	check("email", "El email no es válido.").isEmail(),
	check("email").custom(emailNoExist),
	check("password", "El password es obligatorio.").not().isEmpty(),
	validatePassword,
	validateFields
], login);

export {
	routerLogin
}