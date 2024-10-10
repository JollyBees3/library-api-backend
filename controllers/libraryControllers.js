
// create routes to read a specific book by ID

export const readAbookById = (req, res, next) => {
    try {
        res.status.json('The book Id is')
        
    } catch (error) {
        next(error)
    }
} 

