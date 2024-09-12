# Movie Management System 🎬

A CRUD (Create, Read, Update, Delete) web application that allows users to manage a collection of movies, including the ability to upload movie posters. The application is developed using Node.js, Express.js, MongoDB, EJS, and Multer, and provides functionality to add, view, edit, and delete movies, similar to a Netflix-style interface.

## Features

- **Add Movie**: Users can add new movies with information such as title, description, release date, genre, rating, and upload a poster.
- **View Movies**: Display a list of all movies with posters, titles, descriptions, and more.
- **Edit Movie**: Users can update movie details and replace the poster if needed.
- **Delete Movie**: Users can delete movies along with their associated posters from the system.
  
## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: EJS (Embedded JavaScript)
- **Database**: MongoDB
- **File Upload**: Multer for handling image uploads (movie posters)

## Project Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/movie-management-system.git
2. **Install Dependencies**:
```bash
cd movie-management-system
```
```bash
npm install
```

Configure MongoDB:
Set up a MongoDB database (either locally or using MongoDB Atlas).
Create a .env file in the root of the project and add your MongoDB URI:

MONGODB_URI=mongodb://localhost:27017/moviedb
PORT=9999

Run the Application:
```bash
npm start
```

The app should now be running on http://localhost:9999.

Folder Structure

movie-management-system/
├── models/
│   └── movie.js      # Mongoose schema for movies
├── routes/
│   └── movies.js     # All routes related to movies
├── public/
│   └── uploads/      # Folder for uploaded poster images
├── views/
│   ├── movies/       # EJS templates for adding, viewing, editing, and deleting movies
│   └── partials/     # Reusable EJS components like header, footer, etc.
├── app.js            # Main server file
├── .env              # Environment variables (MongoDB URI, etc.)
├── package.json      # Project metadata and dependencies
└── README.md         # Project documentation

Routes
GET /movies: Display all movies with posters.
GET /movies/add: Display the form for adding a new movie.
POST /movies: Handle adding a new movie and poster image.
GET /movies/edit/:id: Display the form for editing an existing movie.
POST /movies/update/:id: Handle updating a movie's details and poster.
GET /movies/delete/:id: Handle deleting a movie and its poster.

Multer Integration
Multer Setup: Multer is configured to handle file uploads and store movie posters in a dedicated uploads folder.
File Storage: Poster images are stored with unique names to avoid conflicts. Multer middleware is used in the POST routes for handling image uploads.
Learning Outcomes
Implement CRUD operations using Node.js, Express.js, and MongoDB.
Handle image uploads using Multer in a Node.js application.
Render dynamic pages using EJS.
Connect and perform database operations with MongoDB.


Home Page: Displays a list of movies with posters.

Add Movie Page: A form to add a new movie.

Edit Movie Page: A form to update movie details.

Movie List with Delete Option: Users can delete movies directly from the list.


Made with ❤️ by jency



### Key Sections
- **Project Setup**: Detailed steps to get the project running locally.
- **Folder Structure**: Helps other developers understand the organization of your project.
- **Features and Learning Outcomes**: Describes what the project offers and what you learned by building it.
- **Screenshots**: Add images to make the project more visually appealing on GitHub.
