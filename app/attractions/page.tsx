import fetchAttractions from "@/app/util/fetchAttractions";

export default async function Page({ searchParams }: { searchParams: { search: string } }) {
  try {
    const { success, data } = await fetchAttractions(searchParams.search);

    if (!success) {
      return null;
    }

    return (
      <main className="container">
        <section>
          <h1>Search results for "{searchParams.search}"</h1>
          <div>
            {data.length > 0
              ? data.map((item) => <p>{item.name}</p>)
              : "No results"}
          </div>
        </section>
      </main>
    );
  } catch (e) {
    console.error(e);
  }
}
