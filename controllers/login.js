//Internal
import { User } from "../models/index.js";
import { generateJWT } from "../helpers/index.js";

const login = async (req, res) => {
	try {
		const { email } = req.body;
		const user = await User.findOne({ email });
		const token = await generateJWT(user.id);
		user.idToken = token;

		res.status(200).json({
			email: user.email,
			localId: user.localId,
			idToken: user.idToken,
			expiresIn: user.expiresIn
		});
	} catch (error) {
		console.log(error);

		res.status(500).json({
			msg: "El user no se pudo loguear, hable con el administrador"
		});
	}
}

export {
	login
}