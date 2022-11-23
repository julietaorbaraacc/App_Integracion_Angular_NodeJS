//External
import { Router } from 'express';

//Internal
import { fetchRecipes } from '../controllers/index.js';
import {
	validateFields,
	validateJWT
} from '../middlewares/index.js';

const routerFetch = Router();

routerFetch.get("/", [
	validateJWT,
	validateFields
], fetchRecipes);

export {
	routerFetch
}