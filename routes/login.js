//Externo
import { Router } from 'express';
import { check } from 'express-validator';

//Interno
import { login } from '../controllers/index.js';
import { emailNoExiste } from '../helpers/db-validators.js';
import { validarCampos } from '../middlewares/index.js';

const routerLogin = Router();

routerLogin.post("/", [
	check("email", "El email no es válido.").isEmail(),
	check("email").custom(emailNoExiste),
	check("password", "El password es obligatorio.").not().isEmpty(),
	validarCampos
], login);

export {
	routerLogin
}