import { Recipe } from "../models/index.js";

const fetchRecipes = async (req, res) => {
	try {
		const recipesList = await Recipe.find();
		const total = recipesList.length;

		res.status(200).json({
			total,
			recipesList
		});
	} catch (error) {
		res.status(500).json({
			msg: "fetch mal"
		});
	}
}

export {
	fetchRecipes
}