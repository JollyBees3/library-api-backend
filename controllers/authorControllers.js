import { authorModel } from "../models/authorModels.js";


export const addAuthor = async (req, res, next) => {
    try {
        const newAuthor = await authorModel.create(req.body);
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
        // _id: book._id, // Keep the original MongoDB ID if needed
        name: author.name,
        bio: author.bio,
        // author: book.author,
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
        const id = parseInt(req.params.id);
        const authorData = req.body;

        // Fetch all authors to find the correct one based on the custom ID
        const authors = await dataManagement();
        const authorUpdated = authors.find((author) => author.id === id);

        if (!authorUpdated) {
            return res.status(404).json("Author Not found");
        }

        // Update the book in the database using its MongoDB ID
        const Author = await authorModel.findByIdAndUpdate(
            authorUpdated._id,
            authorData,
            { new: true, runValidators: true }
        );
        res.status(200).json("Author updated!");
    } catch (error) {
        next(error);

    }
};


export const deleteAuthor = async (req, res, next) => {
    try {
        const id = req.params.id;
        const authors = await dataManagement();
        const authorDelete = authors.find((author) => author.id === id);
        console.log(authorDelete)
        if (!authorDelete) {
            return res.status(404).json("Deleted Su");
        }

        // Delete the author using its MongoDB ID
        await authorModel.findByIdAndDelete(authorDelete._id);
        // console.log(id)`
        res.status(200).json("Author Deleted");
    } catch (error) {
        next(error);
    }
};