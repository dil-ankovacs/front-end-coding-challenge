export type HeroType = {
  id: number;
  name: string;
  available: boolean;
};

type Props = {
  hero: HeroType;
};

function Hero({ hero }: Props) {
  return (
    <h3>
      {hero.id}. {hero.name} {hero.available && <small>"Available"</small>}
    </h3>
  );
}

export default Hero;
