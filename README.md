# Course Manager

A full-stack course item manager built with React, Django, and SQLite during my RivanCyber internship.

---

## Table of Contents

1. [Overview](#overview)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
5. [Usage](#usage)  
6. [Project Structure](#project-structure)  
7. [Screenshots](#screenshots)  
8. [Contributing](#contributing)  

---

## Overview

**Item Manager** lets you create, view, and track your courses as you learn Django. The React front-end consumes a Django REST API, persisting data in SQLite.

---

## Features

- **Course CRUD**  
  Create, read, update, and delete course entries with title, description, and completion status.

- **Progress Tracking**  
  Mark courses as “in-progress” or “completed” and filter your list accordingly.

- **RESTful API**  
  Django REST framework exposes endpoints for all operations.

- **Responsive UI**  
  Dynamic React interface with real-time updates and form validation.

---

## Tech Stack

- **Front-end:** React, JavaScript, HTML5, CSS3  
- **Back-end:** Django, Django REST Framework, Python 3  
- **Database:** SQLite3  
- **Styling:** Tailwind CSS

---

## Getting Started

### 1. Clone the repository  
```bash
git clone https://github.com/leighTOR/item_manager.git
cd item_manager
````

### 2. Back-end setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate      # on Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

The API will be available at `http://localhost:8000/api/`.

### 3. Front-end setup

```bash
cd ../frontend
npm install
npm start
```

The React app will open at `http://localhost:3000/` and proxy API requests to the Django server.

---

## Usage

1. **Add a Course**
   Click “Add Course”, fill in the form, and submit.

2. **Edit or Delete**
   Use the “Edit” button to change details or the “Delete” button to remove a course.

3. **Toggle Status**
   Click the status checkbox to mark as “in-progress” or “completed.”

4. **Filter & Search**
   Use the filter dropdown and search bar to find courses quickly.

---

## Project Structure

```plaintext
item_manager/
├── backend/                  # Django REST API
│   ├── manage.py
│   ├── requirements.txt
│   ├── item_manager/         # Django project settings
│   └── courses/              # Django app (models, views, serializers)
└── frontend/                 # React client
    ├── public/
    │   └── index.html
    ├── src/
    │   ├── components/       # CourseList, CourseForm, etc.
    │   ├── api.js            # Axios setup
    │   └── App.js
    ├── package.json
    └── README.md             # React-specific notes
```

---

## Screenshots

![image](https://github.com/user-attachments/assets/a371b504-597b-47fe-8d44-07502f6e9731)

![image](https://github.com/user-attachments/assets/214c039a-abb2-4c6d-962f-400e7655fda2)

![image](https://github.com/user-attachments/assets/3301c616-2af0-4d02-8155-798ff741aa33)


---

## Contributing

1. Fork this repo
2. Create a feature branch (`git checkout -b feat/YourFeature`)
3. Commit your changes (`git commit -m "Add awesome feature"`)
4. Push to your branch (`git push origin feat/YourFeature`)
5. Open a Pull Request

Please include screenshots for any UI changes and update this README with relevant details.

---

## Disclaimer

> **For educational purposes only.**  
> These pages are deliberately designed to look like real banking sites—do **not** deploy them publicly or use them to collect data. Always practice safe browsing habits and report suspicious sites to the proper authorities.
