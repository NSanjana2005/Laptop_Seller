# Laptop Seller CRUD Application

## Project Overview
The Laptop Seller application is a web-based application developed using React.js, Node.js, Express.js, and MySQL. It allows users to manage laptop seller records and perform CRUD (Create, Read, Update, Delete) operations.

## Technologies Used
- **Frontend:** React.js, HTML, CSS, Bootstrap (if used)
- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **HTTP Client:** Axios
- **Tools:** Visual Studio Code, Git, GitHub

## Features
- Add new laptop seller records
- View all laptop seller records
- Update existing seller details
- Delete seller records
- Store and manage data using MySQL
- Connect the React frontend with the Node.js backend using REST APIs

## Project Structure
```text
laptop_seller/
├── client/          # React frontend
├── server/          # Node.js and Express.js backend
├── .gitignore
└── README.md
```

## Prerequisites
Make sure the following are installed:
- Node.js and npm
- MySQL Server
- Git

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/laptop_seller.git
cd laptop_seller
```

Replace `YOUR-USERNAME` with your GitHub username.

### 2. Setup the Database
- Start your MySQL server.
- Create the required database and laptop seller table.
- Configure the database connection in the backend.
- Update the database credentials according to your local MySQL setup.

### 3. Setup the Backend
```bash
cd server
npm install
```

Start the backend using the command configured in your `server/package.json`, for example:

```bash
npm start
```

### 4. Setup the Frontend
Open another terminal:

```bash
cd client
npm install
npm start
```

If your React project uses Vite, run:

```bash
npm run dev
```

## How to Use
1. Start the MySQL server.
2. Run the Node.js backend.
3. Run the React frontend.
4. Add, view, update, and delete laptop seller records through the application interface.

## Future Enhancements
- Add user authentication.
- Improve form validation and error handling.
- Deploy the application online.

## Author
**Sanjana Nitnware**

## License
This project is created for educational and learning purposes.
