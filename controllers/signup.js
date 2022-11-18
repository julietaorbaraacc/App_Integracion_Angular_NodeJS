//Externo
import bcryptjs from "bcryptjs";

//Interno
import { Usuario } from "../models/index.js";
import { generarJWT } from "../helpers/generar-jwt.js";

const signup = async (req, res) => {
	try {
		const { email, password } = req.body;
		const usuario = new Usuario({ email, password });
		const salt = bcryptjs.genSaltSync();
		usuario.password = bcryptjs.hashSync(password, salt);
		const token = await generarJWT(usuario.id);
		usuario.idToken = token;

		await usuario.save();

		res.status(200).json({
			email: usuario.email,
			localId: usuario.localId,
			idToken: usuario.idToken,
			expiresIn: usuario.expiresIn
		});
	} catch (error) {
		console.log(error);

		res.status(500).json({
			msg: "El usuario no pudo ser creado, hable con el administrador"
		});
	}
}

export {
	signup
}