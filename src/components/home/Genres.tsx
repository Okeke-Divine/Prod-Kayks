import CTag from "../shared/CTag";
import Divider from "../shared/Divider";

import prisma from "../../db";

async function getGenre() {
  return await prisma.genre.findMany();
}

export default async function Genres() {
  const genres = await getGenre();
  console.log();
  return (
    <>
      <div className="mainLayout" id="beats">
        <div className="flex justify-center mb-2">
          <CTag name="Genres" />
        </div>
        <div className="mt-5 font-bold text-4xl text-center">Genres</div>
        <div className="mb-5">
          {genres.map((genre, index) => (
            <>
              <div>{genre.name}</div>
            </>
          ))}
        </div>
      </div>
      <br />
      <Divider />
    </>
  );
}
