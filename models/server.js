//Externo
import express from 'express';
import cors from 'cors';

//Interno
import { dbConnection } from '../database/config.js';
import {
	routerLogin,
	routerSignUp
} from '../routes/index.js';

class Server {
	constructor() {
		this.app = express();
		this.port = process.env.PORT;
		this.paths = {
			login: "/login",
			signup: "/signup"
		}
		this.conectarDB();
		this.middlewares();
		this.routes();
	}

	async conectarDB() {
		await dbConnection();
	}

	middlewares() {
		this.app.use(cors());
		this.app.use(express.json());
		this.app.use(express.static("public"));
	}

	routes() {
		this.app.use(this.paths.login, routerLogin);
		this.app.use(this.paths.signup, routerSignUp);
	}

	listen() {
		this.app.listen(this.port, () => {
			console.log(`Example app listening on port ${this.port}`);
		});
	}
}

export {
	Server
}