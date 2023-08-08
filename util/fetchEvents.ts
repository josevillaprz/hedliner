export default async function fetchEvents(attractionId: string) {
  const baseUrl = "https://app.ticketmaster.com/discovery/v2/events";
  const apiKey = "bKX5jS9T2TlroD8wMcQ0Gth24As1CZF6";
  const fullUrl = `${baseUrl}?apikey=${apiKey}&attractionId=${attractionId}&locale=*`;

  try {
    const response = await fetch(fullUrl);
    const throwError = false;

    if (!response.ok || throwError) {
      console.error(response);
      throw new Error("API response was not ok");
    }

    const data = await response.json();

    let eventsData;

    if (data["_embedded"]["events"]) {
      eventsData = data["_embedded"]["events"];
    }

    return { success: true, data: eventsData };
  } catch (error) {
    console.error("An error occurred:", error);
    return { success: false, error: "Failed to fetch data from the API" };
  }
}
