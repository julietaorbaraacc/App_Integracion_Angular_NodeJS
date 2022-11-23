//Internal
import { Recipe } from "../models/index.js";

const saveRecipes = async (req, res) => {
	try {
		const recipes = req.body;
		await Recipe.deleteMany({});

		recipes.forEach(async element => {
			const recipe = new Recipe(element);
			await recipe.save();
		});

		res.status(200).json({
			msg: "La recetas se guardaron con éxito"
		});

	} catch (error) {
		res.status(500).json({
			msg: "Hable con el administrador"
		});
	}
}

export {
	saveRecipes
}