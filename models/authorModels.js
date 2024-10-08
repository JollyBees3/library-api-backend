import { Schema, model } from "mongoose";



const authorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required']
  },
  bio: {
    type: String,
    required: [true, 'Bio is required']
  }

});

export const authorModel = model('Author', authorSchema);