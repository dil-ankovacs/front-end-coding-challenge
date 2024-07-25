import { useEffect, useState } from "react";
import { callApi } from "./call-api";
import Hero, { HeroType } from "./hero";

function HeroesList() {
  const [error, setError] = useState<Error | null>(null);
  const [heroes, setHeroes] = useState<HeroType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      setError(null);
      setLoading(true);
      try {
        const heroes = await callApi<HeroType[]>("heroes");
        setHeroes(heroes);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, []);

  return (
    <>
      <h2>Heroes</h2>
      {loading && "Loading..."}
      {error && error.message}
      {heroes?.map((hero) => (
        <Hero key={hero.id} hero={hero} />
      ))}
    </>
  );
}

export default HeroesList;

// checkpoints:
// - displays error message if fetching data fails
// - only displays one of loading, error, or heroes
