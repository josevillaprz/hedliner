/**
 * Fetches music attractions based on a keyword from the API.
 *
 * @param {string} keyword - The keyword to search for in attractions.
 * @returns {Promise<{ success: boolean, data?: any[], error?: string }>} - A promise that resolves to a response object.
 *   - success: A boolean indicating whether the API request was successful.
 *   - data: An array of attractions or an empty array if no attractions are found.
 *   - error: A string containing an error message if the request or response processing encounters an issue.
 *
 * @throws {Error} - Throws an error if the API request fails, if the response is not in the expected JSON format,
 *   or if there's an issue parsing the JSON in the API response.
 */
export default async function fetchAttraction(
  keyword: string
): Promise<{ success: boolean; data?: any[]; error?: string }> {
  const url = `${process.env.API_BASE_URL}attractions?apikey=${process.env.API_KEY}&keyword=${keyword}&segmentId=${process.env.MUSIC_SEGMENT_ID}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    let data;

    try {
      data = await response.json();
    } catch (jsonError: any) {
      throw new Error("Error parsing JSON in the API response");
    }

    const attractions = data?._embedded?.attractions ?? [];

    return { success: true, data: attractions };
  } catch (error: any) {
    console.error("An error occurred:", error.message);
    return { success: false, error: error.message };
  }
}
