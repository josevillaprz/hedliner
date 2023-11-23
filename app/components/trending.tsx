import TrendingCard from "./trending-card";
import { ArtistData } from "../types/artist";

const featuredArtists: Array<ArtistData> = [
  {
    id: "K8vZ917Gp47",
    searchKeyword: "drake",
    name: "Drake",
    imgPath: "/images/featured-artists/featured-1.jpg",
  },
  {
    id: "K8vZ9171FTf",
    searchKeyword: "tool",
    name: "Tool",
    imgPath: "/images/featured-artists/featured-2.jpg",
  },
  {
    id: "K8vZ9171izV",
    searchKeyword: "coldplay",
    name: "coldplay",
    imgPath: "/images/featured-artists/featured-3.jpg",
  },
  {
    id: "K8vZ9171G9V",
    searchKeyword: "metallica",
    name: "metallica",
    imgPath: "/images/featured-artists/featured-4.jpg",
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
