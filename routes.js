import express from "express";
import recipe from "./model/recipe.schema";
const router = express.Router();


router.get('/recipes', async (req, res) => {
    const recipe = await recipe.find({});
    res.render('recipe/index', {recipe});
});

router.get('/recipes/:id', async (req, res) => {
    const recipe = await recipe.findById(req.params.id);
    res.render('recipes/show', { recipe });
});

router.get('/recipes/:id/edit', async (req, res) => {
    const recipe = await recipe.findById(req.params.id);
    res.render('recipes/edit', { recipe });
});

router.put('/recipes/:id', async (req, res) => {
    const {brand,processor,ramSize,laptopModel,price} = req.body;
    const recipe = await recipe.findByIdAndUpdate(req.params.id, {name,cuisine,ingredients,recipeName,price}, { new: true });
    res.redirect(`/recipes/${recipe._id}`);
});

module.exports = router;



