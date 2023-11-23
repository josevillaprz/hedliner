export default async function fetchEvents(attractionId: string) {
  const fullUrl = `${process.env.API_BASE_URL}events?apikey=${process.env.API_KEY}&attractionId=${attractionId}&locale=*`;

  try {
    const response = await fetch(fullUrl);
    const throwError = false;

    if (!response.ok || throwError) {
      throw new Error("API response was not ok");
    }

    const data = await response.json();

    let eventsData = data["_embedded"]?.["events"] || [];

    return { success: true, data: eventsData };
  } catch (error) {
    console.error("An error occurred:", error);
    return { success: false };
  }
}
