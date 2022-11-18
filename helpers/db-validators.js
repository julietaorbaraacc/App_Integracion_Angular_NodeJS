//Interno
import { Usuario } from "../models/index.js";

const emailExiste = async (email = "") => {
	const existeEmail = await Usuario.findOne({ email });

	if (existeEmail) {
		throw new Error(`El correo ${email} ya está registrado.`);
	}

	return true;
}

const emailNoExiste = async (email = "") => {
	const existeEmail = await Usuario.findOne({ email });

	if (!existeEmail) {
		throw new Error(`El correo ${email} no está registrado.`);
	}

	return true;
}

const usuarioExistePorID = async (id) => {
	const existeUsuario = await Usuario.findById(id);

	if (!existeUsuario) {
		throw new Error(`El ID ${id} no existe.`);
	}

	return true;
}

export {
	emailExiste,
	emailNoExiste,
	usuarioExistePorID
}