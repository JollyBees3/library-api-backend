# Project Title
library-api-backend

# Benefits of the project
This is a simple library API bulit with node.js and express.js that has CRUD (Create, Read, Update and Delete) operations

# Tools
Node.js = v20.17.0
npm = 10.8.2

# Clone the repository
git clone https://github.com/JollyBees3/library-api-backend.git

# Make sure you are in the project dirrectory
cd library-api-backend

# Install all Dependencies
npm i or npm install

# run app in development mood
npm run dev

# run app in production mode
npm start

# endpoints of the project 

GET (http://localhost:3000/getallauthors)- To get all authors
GET (http://localhost:3000/getauthor/:id)- To get an author
POST (http://localhost:3000/postauthor)- To add a new author
PATCH (http://localhost:3000/updateauthor/:id)- To update an author
DELETE (http://localhost:3000/deleteauthor/:id)- To delete an author


GET (http://localhost:3000/getall)- To get all books
GET (http://localhost:3000/get/:id)- To get a book
POST (http://localhost:3000/post)- To create a book
PATCH (http://localhost:3000/update/:id)- To update a book
DELETE (http://localhost:3000/delete/:id)- To delete a book

# Project Structure

library-api-backend/
├── controllers/
├── models/
├── node_modules/
├── routes/
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md

# How to contribute 
Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

# Contact Us on 
bboaduboateng2000@gmail.com

# Acknowledgement 
We thank all the individuals and groups or institutions that designed the packages and tools used in this project