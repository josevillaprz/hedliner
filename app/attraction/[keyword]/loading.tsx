import SearchBar from "@/app/components/search-bar";

export default function Loading() {
  return (
    <main className="min-h-screen p-4 md:p-10 mx-auto max-w-7xl">
      <SearchBar />
      <div className="animate-pulse bg-[#1f2331] min-h-[300px] md:h-[500px] mb-10 border-solid rounded-xl">
        <h1>loading</h1>
      </div>
    </main>
  );
}
