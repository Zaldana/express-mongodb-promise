const mongoose = require("mongoose");

const recipeSchema = new mongoose.Schema(
    {
        recipe: {
            type: String,
        },

        date: {
            type: Date,
            default: Date.now,
        },

        price: {
            type: Number,
        },

    }
);

module.exports = mongoose.model("recipe", recipeSchema);