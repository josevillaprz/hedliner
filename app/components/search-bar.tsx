"use client";
import { useEffect, useState, SyntheticEvent } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar({
  handler,
  className,
}: {
  className?: string;
  handler: Function;
}) {
  const router = useRouter();

  const [keyword, setKeyword] = useState("");

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push(`/results/${keyword}`);
  };

  return (
    <form onSubmit={handleSubmit} className={`${className} form mx-auto`}>
      <button className="button" type="submit">
        Search
      </button>
      <label htmlFor="searchInput" className="sr-only">
        Search:
      </label>
      <input
        className="w-full"
        type="text"
        id="searchInput"
        name="search"
        placeholder="Search by artist or location..."
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </form>
  );
}
