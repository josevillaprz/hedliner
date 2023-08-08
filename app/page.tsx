import Image from "next/image";
import Header from "./components/header";
import Hero from "./components/hero";
import ImageGrid from "./components/image-grid";
import Sponsors from "./components/sponsors";
import Trending from "./components/trending";
import Newsletter from "./components/newsletter";

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-10 mx-auto max-w-7xl bg-orbs">
      <Hero />
      <ImageGrid />
      <Sponsors />
      <Trending />
      <Newsletter />
    </main>
  );
}
