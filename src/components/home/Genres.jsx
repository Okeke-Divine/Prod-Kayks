import CTag from "../shared/CTag";
import Divider from "../shared/Divider";
import Link from "next/link";

import prisma from "../../db";

async function getGenre() {
  return await prisma.genre.findMany({
    select: { name: true, thumbnail_url: true, id: true },
  });
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
        <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {genres.map((genre, index) => (
            <Link href={`/genre/${genre.name}`} key={index}>
              <div
                key={index}
                className="rounded flex justify-center items-center border-4 border-[rgb(255,215,128)] cursor-pointer"
              >
                {/*  */}
                <div className="relative w-full">
                  {/* Image container */}
                  <div className="bg-wood w-full h-[300px] rounded overflow-hidden">
                    {/* Image */}
                    <img
                      className="object-cover w-full h-full"
                      alt={genre.name}
                      src={genre.thumbnail_url}
                    />
                    {/* Black overlay */}
                    <div className="absolute inset-0 bg-black opacity-80"></div>
                  </div>

                  {/* Text */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div>
                      <div className="text-white text-center text-3xl font-bold">
                        {genre.name}
                      </div>
                      <div className="text-center text-wood">30+ beats</div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <br />
      <Divider />
    </>
  );
}
