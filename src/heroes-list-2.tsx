import { useEffect, useState } from "react";
import { callApi } from "./call-api";
import Hero, { HeroType } from "./hero";

function HeroesList() {
  const [heroes, setHeroes] = useState<HeroType[] | null>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const heroes = await callApi<HeroType[]>("heroes");
      setLoading(false);
      setHeroes(heroes);
    };

    fetch();
  }, []);

  return (
    <>
      <h2>Heroes</h2>
      {loading
        ? "Loading..."
        : heroes?.map((hero) => <Hero key={hero.id} hero={hero} />)}
    </>
  );
}

export default HeroesList;

// checkpoints:
// - displays loading message while fetching data
