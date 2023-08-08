import SearchBar from "./search-bar";

export default function Hero() {
  return (
    <section className="flex flex-col justify-center items-center text-center my-16">
      <h1>
        Discover Your Ultimate <span className="text-orange-100">Headline</span>{" "}
        Concert Experience
      </h1>
      <h2 className="text-orange">The Ultimate Concert Search Awaits!</h2>
      <SearchBar className="mt-2" />
    </section>
  );
}
