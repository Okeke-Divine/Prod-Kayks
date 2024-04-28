import Link from "next/link";
import CTag from "../shared/CTag";
import Divider from "../shared/Divider";
import ComponentTitle from "../shared/ComponentTitle";
import BeatsByGenre from "../home/BeatsByGenre";
import BeatCard from "../shared/BeatCard";
import prisma from "../../db";

async function getGenres() {
  return await prisma.genre.findMany({
    orderBy: { name: "asc" },
    select: { name: true, id: true },
  });
}

export default async function Beats() {
  const genres = await getGenres();

  return (
    <>
      <div className="mainLayout" id="beats">
        <div className="flex justify-center mb-2">
          <CTag name="Beats" />
        </div>
        <div className="mt-5 font-bold text-4xl text-center">Beats</div>
        <div className="text-center mt-2 text-xl mb-5 text-wood">
          Your first hit starts here!
        </div>

        {/* dynamically render the beat per genre */}
        <div>
          {genres.map((genre, index) => (
            <BeatsByGenre genre={genre} key={index} />
          ))}
        </div>
      </div>
      <br />
      <Divider />
    </>
  );
}
