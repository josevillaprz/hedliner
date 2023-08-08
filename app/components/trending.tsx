import TrendingCard from "./trending-card";
import { ArtistData } from "../types/artist";

const featuredArtists: Array<ArtistData> = [
  {
    searchKeyword: "drake",
    name: "Drake",
    imgPath: "/featured-artists/featured-1.jpg",
  },
  {
    searchKeyword: "beyonce",
    name: "beyonce",
    imgPath: "/featured-artists/featured-2.jpg",
  },
  {
    searchKeyword: "coldplay",
    name: "coldplay",
    imgPath: "/featured-artists/featured-3.jpg",
  },
  {
    searchKeyword: "metallica",
    name: "metallica",
    imgPath: "/featured-artists/featured-4.jpg",
  },
];

export default function Trending() {
  return (
    <div>
      <h2>Featured Artists</h2>
      <div className="flex flex-wrap gap-4 justify-between items-center">
        {featuredArtists.map((item) => {
          return <TrendingCard artistData={item} />;
        })}
      </div>
    </div>
  );
}
