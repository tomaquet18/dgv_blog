# Project Name
📚 DGV Blog (Django, GraphQL, Vue.js)

# Description
This is a blog project built using Django, GraphQL, and Vue.js. The blog allows users to create accounts, create posts, and view them.

# Features
✅ User Authentication: Users can create accounts and log in to the blog.<br>
✅ Post Creation: Authenticated users can create new blog posts.<br>
✅ Post Listing: Users can view a list of all the published blog posts.<br>
✅ Post Detail: Users can click on a specific blog post to view its details.<br>
✅ GraphQL API: The project utilizes GraphQL for querying and manipulating data.

# Technologies Used
🔧 Django: Python-based web framework used for the backend development.<br>
🔧 GraphQL: Query language and runtime for APIs.<br>
🔧 Vue.js: JavaScript framework used for building the frontend user interface.<br>

# Installation
To run the project locally, follow these steps:
1. Clone the repository:
```bash
git clone https://github.com/tomaquet18/dgv_blog
```
2. Install the required dependencies:
```bash
cd Django_blog/backend
pip install -r requirements.txt
```
3. Set up the database:
```bash
python manage.py migrate
```
4. Start the development server:
```bash
python manage.py runserver
```
5. Install the required dependencies for the frontend (Vue.js):
```bash
cd ../frontend
npm install
```
6. Open a new terminal window, navigate to the frontend directory, and start the development server for the frontend:
```bash
npm run serve
```
7. Open your browser and visit http://localhost:8080 to see the blog.

Note: By default, Vue.js uses port 8080 for development. If this port is already in use on your system, you can specify a different port by modifying the configuration in the frontend/vue.config.js file.
8. Access the admin panel by visiting http://localhost:8000/admin to create user accounts and manage posts.

Now you have the backend server and frontend development server up and running, allowing you to use the blog locally.

# Usage
- Create an account or log in if you already have one. Access the admin panel by visiting http://localhost:8000/admin and entering your credentials.
-  Once logged in, you can create new blog posts by clicking on the "Add Post" button in the admin panel.
- To view the blog posts, visit http://localhost:8080 to see the homepage of the blog.
- Clicking on a specific blog post will take you to its detailed view.
- Feel free to explore and interact with the blog features. Remember to use the admin panel for creating and managing posts.

# Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature/bugfix: git checkout -b feature/your-feature.
3. Make your changes and commit them: git commit -m 'Add some feature'.
4. Push the changes to your forked repository: git push origin feature/your-feature.
5. Submit a pull request detailing your changes.
