import { EventData } from "@/app/types/event";
import Link from "next/link";
import formatDateToMMDD from "@/util/formatDate";

export default function EventList({ data }: { data: EventData }) {
  let events = data.events;

  return (
    <ul>
      {events.map((item: any) => {
        const date = formatDateToMMDD(item.dates.start.localDate ?? "");
        const venue = item._embedded.venues[0] ?? {};
        // TODO: Get "state" for values that dont have it, Outside the US
        const city = venue?.city?.name ?? "";
        const state = venue?.state?.stateCode ?? "";

        return (
          <article className="flex items-center p-5 justify-between border-solid rounded-lg mb-5">
            <div className="flex gap-2">
              <div className="w-12 flex flex-col items-center">
                <p className="flex flex-col items-center justify-center leading-tight text-l text-orange-200">
                  <span className="font-semibold text-3xl">{date.day}</span>
                  {date.month}
                </p>
              </div>
              <div>
                <h2 className="font-bold mb-1">{item.name}</h2>
                <div>
                  <p>{`${city}, ${state}`}</p>
                  <p>{item._embedded.venues[0].name}</p>
                </div>
              </div>
            </div>
            <Link href={item.url} className="button self-start">
              Tickets
            </Link>
          </article>
        );
      })}
    </ul>
  );
}
