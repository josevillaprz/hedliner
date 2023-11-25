import { EventData } from "@/app/types/interfaces";
import Link from "next/link";
import formatDateToMMDD from "@/app/util/formatDate";

export default function EventList({ data }: { data: EventData }) {

  if (!data.events || data.events.length === 0) {
    return <div>no results</div>;
  }

  return (
    <ul>
      {data.events.map((item) => {
        const date = formatDateToMMDD(item.dates.start.localDate ?? "");
        const venue = item?._embedded?.venues[0] ?? {};
        const city = venue.city?.name || "";
        const state = venue.state?.stateCode || "";

        return (
          <article
            key={item.id}
            className="flex items-center p-5 justify-between border-solid rounded-lg mb-5"
          >
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
                  <p>{venue.name}</p>
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
