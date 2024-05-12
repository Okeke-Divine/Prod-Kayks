import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Beats from "../components/home/Beats";
import Genres from "../components/home/Genres";

export const dynamic = 'force-dynamic'

export default async function LandingPage() {
  return (
    <>
      <Hero />
      <Beats />
      <Genres />
      <Services />
    </>
  );
}