/**
 * Searches Teleport API for cities/locations based on user input.
 * 
 * @param {string} input - search query typed in the CLI prompt.
 * @returns {Promise<Array<string>>} List of location names.
 */
export async function searchCountries(input = '') {
  const query = typeof input === 'string' ? input.trim() : '';

  // Return empty array if the user hasn't typed
  if (!query) return [];

  try {
    const url = `https://api.teleport.org/api/cities/?search=${encodeURIComponent(query)}`;
    const response = await fetch(url);

    if (!response.ok) return [];

    const data = await response.json();

    // Safely extract the results array from Teleport's HAL JSON response
    const searchResults = data?._embedded?.['city:search-results'] || [];

    // Extract the human-readable full name (e.g., "Oslo, Norway")
    return searchResults.map((item) => item.matching_full_name);
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
}