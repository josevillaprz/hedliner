/**
 * Fetches all music attractions based on keyword.
 *
 * @param String keyword - keyword to search by.
 * @returns Object - response object, or null if the data array is empty.
 * @throws Error - on failed fetch.
 */
export default async function fetchAttraction(keyword: string) {
  const baseUrl = "https://app.ticketmaster.com/discovery/v2/attractions";
  const apiKey = "bKX5jS9T2TlroD8wMcQ0Gth24As1CZF6";
  const musicSegmentID = "KZFzniwnSyZfZ7v7nJ";
  const fullUrl = `${baseUrl}?apikey=${apiKey}&keyword=${keyword}&segmentId=${musicSegmentID}`;

  try {
    const response = await fetch(fullUrl);

    if (!response.ok) {
      console.error("API response was not ok:", response);
      return { success: false };
    }

    const data = await response.json();
    const attractions = data["_embedded"]["attractions"] ?? null;

    return { success: true, data: attractions };
  } catch (error) {
    console.error("An error occurred:", error);
    return { success: false };
  }
}
