/**
 * Fetches single music attraction based on id.
 *
 * @param String ID - id of attraction to search by.
 *
 * @returns Object - response object, or null if the data array is empty.
 *
 * @throws Error - on failed fetch.
 */
export default async function fetchSingleAttraction(id: string) {
  const fullUrl = `${process.env.API_BASE_URL}attractions?apikey=${process.env.API_KEY}&id=${id}&segmentId=${process.env.MUSIC_SEGMENT_ID}`;

  try {
    const response = await fetch(fullUrl);

    if (!response.ok) {
      throw new Error("API response was not ok");
    }

    const data = await response.json();
    const artistData = data["_embedded"]?.["attractions"]?.[0] ?? null;

    return { success: true, data: artistData };
  } catch (error) {
    console.error("An error occurred:", error);
    return { success: false };
  }
}
