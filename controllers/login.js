//Externo
import bcryptjs from "bcryptjs";

//Interno
import { Usuario } from "../models/index.js";
import { generarJWT } from "../helpers/index.js";

const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const usuario = await Usuario.findOne({ email });
		const validPassword = bcryptjs.compareSync(password, usuario.password);

		if (!validPassword) {
			return res.status(400).json({
				msg: "El password no es correcto"
			});
		}

		const token = await generarJWT(usuario.id);
		usuario.idToken = token;

		res.status(200).json({
			email: usuario.email,
			localId: usuario.localId,
			idToken: usuario.idToken,
			expiresIn: usuario.expiresIn
		});
	} catch (error) {
		console.log(error);

		res.status(500).json({
			msg: "El usuario no se pudo loguear, hable con el administrador"
		});
	}
}

export {
	login
}