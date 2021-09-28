var express = require('express');
var router = express.Router();
const { getAllRecipe, createRecipe,updateRecipeById,
    deleteRecipeById  } = require("./controller/recipeController");

router.get('/', function (req, res, next) {

    getAllRecipe({}).then((payload) => {
        res.json({ message: "success", payload });
    }).catch((error) => {
        res.status(500).json({ message: "failure", error: error.message });
    })

});

router.post('/create-recipe', function (req, res, next) {

    createRecipe(req.body)
    .then((payload) => {
        res.json({ message: "success", payload });
    })
    .catch((error) => {
        res.status(500).json({ message: "failure", error: error.message });
    })

});

router.put('/update-Recipe-by-id/:id', function (req, res, next) {

    updateRecipeById(req.params.id, req.body)
    .then((payload) => {
        res.json({ message: "success", payload });
    })
    .catch((error) => {
        res.status(500).json({ message: "failure", error: error.message });
    })

});

router.delete('/delete-recipe-by-id/:id', function (req, res, next) {

    deleteRecipeById(req.params.id)
    .then((payload) => {
        res.json({ message: "success", payload });
    })
    .catch((error) => {
        res.status(500).json({ message: "failure", error: error.message });
    })

})

module.exports = router;