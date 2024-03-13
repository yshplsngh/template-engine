import mongoose, {Schema} from "mongoose";

const recipeSchema = new Schema({
        name: {
            type: String,
            required: true,
            trim: true
        },
        cuisine: {
            type: String,
            required: true,
            trim: true
        },
        ingredient: {
            type: Number,
            required: true,
            trim: true
        },
        recipeName: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true
        }
    }, {
        timestamps: true
    }
)

const recipe = mongoose.model('Recipe', recipeSchema)
module.exports = {recipe}