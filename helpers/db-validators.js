//External
import bcryptjs from "bcryptjs";

//Internal
import { User } from "../models/index.js";

const emailExist = async (email = "") => {
	const existEmail = await User.findOne({ email });

	if (existEmail) {
		throw new Error(`El correo ${email} ya está registrado.`);
	}

	return true;
}

const emailNoExist = async (email = "") => {
	const existEmail = await User.findOne({ email });

	if (!existEmail) {
		throw new Error(`El correo ${email} no está registrado.`);
	}

	return true;
}

const userExistByID = async (id) => {
	const existUser = await User.findById(id);

	if (!existUser) {
		throw new Error(`El ID ${id} no existe.`);
	}

	return true;
}

export {
	emailExist,
	emailNoExist,
	userExistByID
}