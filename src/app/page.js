import Hero from "../components/home/Hero"
import Services from "../components/home/Services"
import Beats from "../components/home/Beats"
import Genres from "../components/home/Genres.tsx"

export default function Home() {
  return (
    <>
      <Hero />
      <Beats />
      <Genres />
      <Services />
    </>
  );
}
