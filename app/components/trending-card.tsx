import Link from "next/link";
import { ArtistData } from "../types/artist";

export default async function TrendingCard({
  artistData,
}: {
  artistData: ArtistData;
}) {
  return (
    <Link
      href={`/attraction/${artistData.searchKeyword}`}
      className={`trending-card`}
      style={{ backgroundImage: `url(${artistData.imgPath})` }}
    >
      <div className="absolute inset-0 bg-black opacity-60 rounded-lg"></div>
      <div className="relative z-10">
        <h3 className="capitalize text-center font-semibold text-[24px]">
          {artistData.name}
        </h3>
      </div>
    </Link>
  );
}
