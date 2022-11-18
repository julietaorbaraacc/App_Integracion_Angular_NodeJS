//Externo
import { Schema, model } from "mongoose";

const usuarioSchema = Schema({
	email: {
		type: String,
		required: [true, 'Email is required'],
		unique: true
	},
	password: {
		type: String,
		required: [true, 'Password is required'],
	},
	localId: {
		type: String,
		required: false,
		default: 'G996DFgey3gSpvSzux04ySzErkR2'
	},
	expiresIn: {
		type: String,
		required: false,
		default: '3600'
	},
	idToken: {
		type: String,
		required: false,
		default: ''
	},
	estado: {
		type: Boolean,
		default: true
	}
});

usuarioSchema.methods.toJSON = function () {
	const { _id, localId, expiresIn, __v, ...usuario } = this.toObject();
	usuario.uid = _id;
	return usuario;
};

const Usuario = model('Usuario', usuarioSchema);

export {
	Usuario
} 