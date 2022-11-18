//Externo
import jsonwebtoken from "jsonwebtoken";

//Interno
import { Usuario } from "../models/index.js";

const validarJWT = async (req, res, next) => {
	const token = req.header("x-token");

	if (!token) {
		return res.status(401).json({
			msg: "No hay token en la petición."
		});
	}

	try {
		const { uid } = jsonwebtoken.verify(token, process.env.SECREORPRIVATEKEY);
		const usuario = await Usuario.findById(uid);

		// if (!usuario) {
		// 	return res.status(401).json({
		// 		msg: "El usuario no existe en la DB."
		// 	});
		// }

		// if (!usuario.estado) {
		// 	return res.status(401).json({
		// 		msg: "El usuario tiene estado: false."
		// 	});
		// }

		req.usuario = usuario;
		next();
	} catch (error) {
		console.log(error);

		return res.status(401).json({
			msg: "Token no válido"
		});
	}
}

export {
	validarJWT
}