import CTag from "../shared/CTag";
import Divider from "../shared/Divider";

import prisma from "../../db";

async function getGenre() {
  return await prisma.genre.findMany({ select: { name: true } });
}

export default async function Genres() {
  const genres = await getGenre();
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
              {/*  */}
              <div className="relative w-full">
                {/* Image container */}
                <div className="bg-wood w-full h-[150px] rounded overflow-hidden">
                  {/* Image */}
                  <img
                    className="object-cover w-full h-full"
                    alt={genre.name}
                    src={`/assets/images/genres/popsmoke.jpg`}
                  />
                  {/* Black overlay */}
                  <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">{genre.name}</div>
                </div>
              </div>
              {/*  */}
            </div>
          ))}
        </div>
      </div>
      <br />
      <Divider />
    </>
  );
}
