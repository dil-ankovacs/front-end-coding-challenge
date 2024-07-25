import { useEffect, useState } from "react";
import { callApi } from "./call-api";
import Hero, { HeroType } from "./hero";

function HeroesList() {
  const [heroes, setHeroes] = useState<HeroType[] | null>(null);

  useEffect(() => {
    const fetch = async () => {
      const heroes = await callApi<HeroType[]>("heroes");
      setHeroes(heroes);
    };

    fetch();
  }, []);

  return (
    <>
      <h2>Heroes</h2>
      {heroes?.map((hero) => (
        <Hero key={hero.id} hero={hero} />
      ))}
    </>
  );
}

export default HeroesList;

// checkpoints:
// - defines type for hero
// - reuses type for hero if uses it in multiple files
// - in case they don't create a Hero component on their own, they create it when the interviewer asks them to
// - uses props to pass hero to Hero component
// - able to figure out how to use the callApi function
// - uses useEffect to fetch data
// - adds dependency array to useEffect
// - stores heroes in state
// - loops through heroes
// - uses key for list items
// - displays hero name and optionally the hero id
// - displays if hero is available
// - does not duplicate code anywhere
// - optionally handles empty list