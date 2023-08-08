import { EventData } from "@/app/types/event";

export default function Hero({ data }: { data: EventData }) {
  return (
    <div
      className="min-h-[300px] md:h-[500px] mb-10 border-solid rounded-xl p-10 mt-20"
      style={{
        background: `linear-gradient(90deg, rgba(38, 42, 52, 0.8) 0%, rgba(38, 42, 52, 0.00) 100%), url(${data.image.url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1>{data.name}</h1>
    </div>
  );
}
