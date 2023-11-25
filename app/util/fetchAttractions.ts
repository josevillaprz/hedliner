import { AttractionData } from '@/app/types/interfaces';
import { filterBiggestImage } from "@/app/util/utils";

/**
 * Fetches music attractions based on a keyword from the API.
 *
 * @param {string} keyword - The keyword to search for in attractions.
 * @returns {Promise<{ success: boolean, data?: AttractionData[], error?: string }>} - A promise that resolves to a response object.
 *   - success: A boolean indicating whether the API request was successful.
 *   - data: An array of attractions or an empty array if no attractions are found.
 *   - error: A string containing an error message if the request or response processing encounters an issue.
 *
 * @throws {Error} - Throws an error if the API request fails, if the response is not in the expected JSON format,
 *   or if there's an issue parsing the JSON in the API response.
 */
export default async function fetchAttractions(
  keyword: string
): Promise<{ success: boolean; data: AttractionData[]; error?: string }> {
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

    const attractions = data["_embedded"]?.["attractions"] || [];
    let attractionsData: AttractionData[] = [];

    if (attractions.length > 0) {
      attractions.forEach((item: any) => {
        const attraction: AttractionData = {
          name: item.name ?? "",
          id: item.id ?? "",
          locale: item.locale ?? "",
          image: {
            src: filterBiggestImage(item.images)?.url ?? "",
            width: 0,
            height: 0,
          },
          eventsCount: item.upcomingEvents?._total ?? 0,
          url: item.url ?? "",
        };

        let image = filterBiggestImage(item.images);
        attraction.image.src = image?.url ?? "";
        attraction.image.width = image?.width ?? 0;
        attraction.image.height = image?.height ?? 0;

        attractionsData.push(attraction);
      });
    }

    // console.log(attractionsData);
    return { success: true, data: attractionsData };
  } catch (error: any) {
    console.error("An error occurred:", error.message);
    return { success: false, data: [], error: error.message };
  }
}
