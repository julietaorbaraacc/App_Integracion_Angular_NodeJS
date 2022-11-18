//Externo
import * as dotenv from 'dotenv';

//Interno
import { Server } from './models/server.js';

dotenv.config();

const server = new Server();
server.listen();