import { authorModel } from "../models/authorModels.js";
import { addAuthorValidator, updateAuthorValidator } from "../validators/authorValidators.js";


export const addAuthor = async (req, res, next) => {
    try {
        const {error, value} = addAuthorValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }
        const newAuthor = await authorModel.create(value);
        res.status(200).json(newAuthor);
    } catch (error) {
        next(error);
    }
};


// handling the id's so that calling it will be a bit easier
const dataManagement = async () => {
    const authors = await authorModel.find();
    return authors.map((author, index) => ({
        id: index + 1, // Use index + 1 for 1-based IDs
        _id: author._id, // Keep the original MongoDB ID if needed
        name: author.name,
        bio: author.bio,
        __v: author.__v,
    }));
};

export const getAuthor = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const authors = await dataManagement();

        const author = authors.find((author) => author.id === id);
        if (!author) {
            res.status(404).json("Author not found");
        }
        res.status(200).json(author);
    } catch (error) {
        next(error);

    }
};

export const getAllAuthors = async (req, res, next) => {
    try {
        const authors = await dataManagement();
        res.status(200).json(authors);
    } catch (error) {
        next(error);
    }
};

export const updateAuthor = async (req, res, next) => {
    try {
        const {error, value} = updateAuthorValidator.validate(re.body)
        if (error) {
            return res.status(422).json(error);
        }

        const id = parseInt(req.params.id);
        const authorData = req.body;

        // Fetch all authors to find the correct one based on the custom ID
        const authors = await dataManagement();
        const authorToUpdated = authors.find((author) => author.id === id);

        if (!authorToUpdated) {
            return res.status(404).json("Author Not found");
        }

        // Update the book in the database using its MongoDB ID
        const updatedAuthor = await authorModel.findByIdAndUpdate(
            authorToUpdated._id,
            authorData,
            { new: true, runValidators: true }
        );
        res.status(200).json(updatedAuthor);
    } catch (error) {
        next(error);
    }
};


export const deleteAuthor = async (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const authors = await dataManagement();
        const authorToDelete = authors.find((author) => author.id === id);
        
        if (!authorToDelete) {
            return res.status(404).json("Author not found!");
        }

        // Delete the author using its MongoDB ID
        await authorModel.findByIdAndDelete(authorToDelete._id);
        // console.log(id)`
        res.status(200).json("Author Deleted");
    } catch (error) {
        next(error);
    }
};