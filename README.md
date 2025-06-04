# Rojan's Book Collection 📖

This is a personalized web app for showcasing a curated collection of books that I’ve read or loved. It includes book covers, author names, personal and average ratings, and a quick summary. You can also sign up for updates (just for fun!).

> **Note:** This project was originally a group project for a college full-stack programming course. However, I completely transformed and rebuilt it to match my own creative ideas and interests. 💅

---

## Features

- Responsive and aesthetic card grid of books
- Smooth hover effects
- Custom fonts and color palette
- Sign-up form with real-time validation
- Fully styled navigation bar
- JSON-driven dynamic rendering using JavaScript

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- JSON for book data
- Google Fonts

---

## JSON Structure (`books.json`)

```json
[
  {
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "img": "img/gatsby.jpg",
    "rating": 4,
    "avgRating": 3.9,
    "summary": "A story about the roaring 20s, love, wealth, and tragedy."
  }
]
```

---

## JavaScript Functionality (script.js)

- Dynamic Book Cards: Fetches books.json, loops over each entry, and creates a custom card.
- Hover Flip Effect: Uses CSS to reveal a semi-transparent dark overlay with the book summary.
- Sign-Up Form Validation: Validates name and email with regex. Displays an error message if invalid.
- Form Feedback: On valid submission, it shows a success alert.
