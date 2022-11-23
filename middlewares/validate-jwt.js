//Externo
import jsonwebtoken from "jsonwebtoken";

//Interno
import { User } from "../models/index.js";

const validateJWT = async (req, res, next) => {
	const { auth } = req.query;

	if (!auth) {
		return res.status(401).json({
			msg: "No hay token en la petición."
		});
	}

	try {
		const { uid } = jsonwebtoken.verify(auth, process.env.SECREORPRIVATEKEY);
		const user = await User.findById(uid);

		req.user = user;
		next();
	} catch (error) {
		console.log(error);

		return res.status(401).json({
			msg: "Token no válido"
		});
	}
}

export {
	validateJWT
}