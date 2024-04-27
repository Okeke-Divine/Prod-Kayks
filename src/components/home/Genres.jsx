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
        <div className="my-5 grid grid-cols-1 md:grid-cols-4 gap-2">
          {genres.map((genre, index) => (
            <div
              key={index}
              className="rounded flex justify-center items-center border-2 border-[rgb(255,215,128)] cursor-pointer"
            >
              <div className="w-full">
                <div className="bg-wood w-full h-[150px] rounded">
                  {/* image container */}
                </div>
                <div className="p-1">{genre.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <Divider />
    </>
  );
}
