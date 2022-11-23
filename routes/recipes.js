//External
import { Router } from 'express';

//Internal
import {
	save,
	fetch
} from '../controllers/index.js';
import {
	validateFields,
	validateJWT
} from '../middlewares/index.js';

const routerSave = Router();
const routerFetch = Router();

routerSave.post("/", [
	validateJWT,
	validateFields
], save);

routerFetch.get("/", [
	validateJWT,
	validateFields
], fetch);

export {
	routerSave,
	routerFetch
}