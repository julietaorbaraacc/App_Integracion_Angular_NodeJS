//External
import { Router } from 'express';

//Internal
import { saveRecipes } from '../controllers/index.js';
import {
	validateFields,
	validateJWT
} from '../middlewares/index.js';

const routerSave = Router();

routerSave.post("/", [
	validateJWT,
	validateFields
], saveRecipes);

export {
	routerSave
}