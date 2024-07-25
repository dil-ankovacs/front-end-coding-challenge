import Hero, { HeroType } from "./hero";
import { useFetchedData } from "./use-fetched-data";

function HeroesList() {
  const { data, error, loading } = useFetchedData<HeroType[]>("heroes");

  return (
    <>
      <h2>Heroes</h2>
      {loading && "Loading..."}
      {error && error.message}
      {data?.map((hero) => (
        <Hero key={hero.id} hero={hero} />
      ))}
    </>
  );
}

export default HeroesList;

// checkpoints:
// - can define a custom hook containing the logic for fetching data
// - uses generic type for the data
// - big plus if uses discriminated union for the return value of the custom hook
