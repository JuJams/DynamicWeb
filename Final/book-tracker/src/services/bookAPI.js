// API Service for Open Library
// I learned axios from class - it's so much easier than fetch() for API calls!
// This service handles searching for books using the Open Library API
import axios from 'axios'

const BASE_URL = 'https://openlibrary.org'

// Function to search for books using Open Library API
// This was interesting to work with - the API returns data in a specific format that needed mapping
export const searchBooks = async (query) => {
  try {
    const response = await axios.get(`${BASE_URL}/search.json`, {
      params: {
        q: query,
        limit: 20, // Limit results to 20 books
      },
    })

    // Map API response to our book format
    // This part was a bit tricky - handling arrays and optional fields
    return response.data.docs
      .map((book) => ({
      title: book.title,
      author: book.author_name ? book.author_name[0] : 'Unknown Author',
      isbn: book.isbn ? book.isbn[0] : null,
      coverId: book.cover_i,
      coverUrl: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : null,
      firstPublishYear: book.first_publish_year,
      genre: book.subject ? book.subject[0] : null,
    }))
      .filter(book => book.coverUrl) // Only return books with covers - learned this filtering from class
  } catch (error) {
    console.error('Error searching books:', error)
    throw error
  }
}
