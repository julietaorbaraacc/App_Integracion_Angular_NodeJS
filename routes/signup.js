//Externo
import { Router } from 'express';
import { check } from 'express-validator';

//Interno
import { signup } from '../controllers/index.js';
import { emailExist } from '../helpers/index.js';
import { validateFields } from '../middlewares/index.js';

const routerSignUp = Router();

routerSignUp.post("/", [
	check("email", "El email no es válido.").isEmail(),
	check("email").custom(emailExist),
	check("password", "El password es obligatorio.").not().isEmpty(),
	check("password", "El password debe tener mínimo 6 letras.").isLength({ min: 6 }),
	validateFields
], signup);

export {
	routerSignUp
}