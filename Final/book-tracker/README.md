# Book Tracker - Final Project

A personal reading list tracker where you can organize books by status, track ratings, and view reading statistics.

## What It Does

This app helps you track your reading journey:
- **Add Books**: Search for books using the Open Library API and add them to your library
- **Organize by Status**: Move books between "Want to Read", "Currently Reading", and "Read" shelves
- **Rate Books**: Give completed books a 1-5 heart rating
- **View Statistics**: See your total books, reading progress, and average rating
- **Search & Sort**: Search your library and sort books by date, title, or author

## How to Run

1. Install dependencies:
```bash
npm install
```

2. Start the app:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Technologies & Concepts Used

This project demonstrates:

- **Redux Toolkit**: State management for books (add, remove, update status/rating)
- **useSelector**: Used in `App.js` and `useBooks.js` to access Redux state - makes it easy to get books from the store without prop drilling
- **Context API**: Reading statistics context to share stats across components
- **Custom Hooks**: `useBooks` hook for book management logic
- **API Integration**: Open Library API for searching books (using axios)
- **LocalStorage**: Persisting book data in the browser
- **React Hooks**: useState, useEffect, useContext, useMemo
- **Tailwind CSS**: Styling with custom color theme

## Development Experience

**What was challenging:**
- Getting the Context API and Redux to work together was tricky at first - figuring out when to use each one
- The sorting logic took some time to get right, especially handling edge cases with missing data
- Managing state across multiple components and making sure everything updates correctly

**What was fun:**
- Using useSelector from Redux was really satisfying - it's so clean to just grab state from anywhere!
- Building the animated quote feature was fun - seeing the fade transitions work smoothly
- The Open Library API integration was interesting - mapping their data format to what we needed
- Creating the reading statistics dashboard and seeing all the numbers calculate automatically

## Project Structure

- `src/store/` - Redux store and slice for book state
- `src/context/` - Context API for reading statistics
- `src/hooks/` - Custom hooks (useBooks)
- `src/components/` - Reusable components (BookCard, ReadingStats, etc.)
- `src/pages/` - Page components (HomePage, WantToReadPage, etc.)
- `src/services/` - API and localStorage services

## Features

- Add books from Open Library API
- Three status shelves (Want to Read, Currently Reading, Read)
- Heart rating system (1-5) for completed books
- Reading statistics dashboard
- Search within library
- Sort books by date, title
- Persistent storage with localStorage
- Responsive design

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
