import fetchEvents from "@/app/util/fetchEvents";
import fetchSingleAttraction from "@/app/util/fetchSingleAttraction";
import { EventData } from "@/app/types/interfaces";
import { filterBiggestImage } from '../util/utils';
import Hero from "./components/Hero";
import EventList from "./components/events-list";
import SearchBar from "@/app/components/search-bar";

const defaultImageData = {
  url: "",
  width: 0,
  height: 0,
};

const data: EventData = {
  attractionId: "",
  name: "",
  image: { ...defaultImageData },
  events: [],
};

export default async function Page({ searchParams }: { searchParams: { id: string } }) {
  let attractionResult = null;

  try {
    attractionResult = await fetchSingleAttraction(searchParams.id);

    let image = attractionResult.data.images
      ? filterBiggestImage(attractionResult.data.images)
      : /* TODO: default placeholder image */ null;

    data.attractionId = attractionResult.data.id ?? "";
    data.name = attractionResult.data.name ?? "";
    data.image = image ?? { ...defaultImageData };

    const eventResult = await fetchEvents(data.attractionId);

    data.events = eventResult.data ?? [];
  } catch (error) {}

  return (
    <main className="min-h-screen p-4 md:p-10 mx-auto max-w-7xl">
      <SearchBar />
      <Hero data={data} />
      <EventList data={data} />
    </main>
  );
}
