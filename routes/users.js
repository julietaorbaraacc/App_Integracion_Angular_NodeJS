//External
import { Router } from 'express';
import { check } from 'express-validator';

//Internal
import {
	login,
	signup
} from '../controllers/index.js';
import {
	emailExists,
	emailNoExists
} from '../helpers/index.js';
import {
	validateFields,
	validatePassword
} from '../middlewares/index.js';

const routerUsers = Router();

routerUsers.post("/", [
	check("email", "The email is not valid").isEmail(),
	check("email").custom(emailNoExists),
	check("password", "The password is mandatory").not().isEmpty(),
	validatePassword,
	validateFields
], login);

routerUsers.post("/", [
	check("email", "The email is not valid").isEmail(),
	check("email").custom(emailExists),
	check("password", "The password is mandatory").not().isEmpty(),
	check("password", "The password must have at least 6 characters").isLength({ min: 6 }),
	validateFields
], signup);

export {
	routerUsers
}