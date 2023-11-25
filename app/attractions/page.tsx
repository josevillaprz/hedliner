import fetchAttractions from "@/app/util/fetchAttractions";

export default async function Page({
  searchParams,
}: {
  searchParams: { search: string };
}) {
  try {
    const { success, data } = await fetchAttractions(searchParams.search);

    // console.log(data);

    return (
      <main className="min-h-screen p-4 md:p-10 mx-auto max-w-7xl">
        <section className="">
          <h1>Search results for "{searchParams.search}"</h1>
          {data.length > 0 ? (
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  <a href={`/attraction?id=${item.id}`}>
                    <article>
                      <h2>{item.name}</h2>
                      <p>Events: {item.eventsCount}</p>
                    </article>
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            "No Results"
          )}
        </section>
      </main>
    );
  } catch (e) {
    console.error(e);
  }
}
