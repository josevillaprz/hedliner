import fetchEvents from "@/util/fetchEvents";
import fetchSingleAttraction from "@/util/fetchSingleAttraction";
import { EventData } from "@/app/types/event";
import Hero from "../components/Hero";
import EventList from "../components/events-list";
import SearchBar from "@/app/components/search-bar";
import { Suspense } from "react";

function filterBiggestImage(images: any[]) {
  return images.reduce((prev, cur) => (prev.width < cur.width ? cur : prev));
}

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

export default async function Page({
  params,
}: {
  params: { keyword: string };
}) {
  // get Attraction data
  const attractionResult = await fetchSingleAttraction(params.keyword);
  if (!attractionResult.success) {
    return;
  }

  // Get biggest image in data or return placeholder if no images.
  let image = attractionResult.data.images
    ? filterBiggestImage(attractionResult.data.images)
    : /* TODO: default placeholder image */ null;

  data.attractionId = attractionResult.data.id ?? "";
  data.name = attractionResult.data.name ?? "";
  data.image = image ?? { ...defaultImageData };

  // get Event data
  const eventResult = await fetchEvents(data.attractionId);
  if (!eventResult.success) {
    return;
  }

  data.events = eventResult.data ?? "";
  // console.log(data);

  return (
    <main className="min-h-screen p-4 md:p-10 mx-auto max-w-7xl">
      <SearchBar />
      <Hero data={data} />
      <EventList data={data} />
    </main>
  );
}
