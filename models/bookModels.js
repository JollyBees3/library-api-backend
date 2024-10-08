import { Schema, models, Types } from "mongoose";

const bookSchema = new Schema ({
    title: {
        type: String, required: true
    },
    Body: {
        type: String, required: true
    },
    author: {
        type: Types.ObjectId, ref: "Author"
    }
})

export const bookeModel = model("Book", bookSchema)