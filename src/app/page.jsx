import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Beats from "../components/home/Beats";
import Genres from "../components/home/Genres";
import { Suspense } from "react";

export default async function LandingPage() {
  return (
    <>
      <Hero />
      {/* <Suspense fallback={<>Loading...</>}> */}
      <Beats />
      {/* </Suspense> */}
      <Genres />
      <Services />
    </>
  );
}
