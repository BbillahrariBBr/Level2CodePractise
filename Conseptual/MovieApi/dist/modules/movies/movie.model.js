"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movies = void 0;
const mongoose_1 = require("mongoose");
const reviewSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
});
const movieSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: [true, "Title  is required"],
    },
    description: {
        type: String,
        required: [true, "Description  is required"],
    },
    releaseDate: {
        type: Date,
    },
    genre: {
        type: String,
        required: [true, "genre  is required"],
    },
    reviews: {
        type: [reviewSchema],
    },
    slug: {
        type: String,
    },
    viewCount: {
        type: Number,
        default: 0,
    },
    isDeleted: {
        isDeleted: Boolean,
        default: false,
    },
});
exports.Movies = (0, mongoose_1.model)("Movie", movieSchema);
