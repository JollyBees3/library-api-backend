import { Schema, model, Types } from "mongoose";

const bookSchema = new Schema ({
    title: {
        type: String, required: true
    },
    Body: {
        type: String, required: true
    },
    author: {
        type: Types.ObjectId, ref: "Author"
    },
    cover: {
        type: String
    }
})

export const bookeModel = model("Book", bookSchema)