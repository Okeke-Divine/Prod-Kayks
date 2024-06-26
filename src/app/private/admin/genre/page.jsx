import Link from "next/link";
import prisma from "../../../../db";
import { redirect } from "next/navigation";
import GenreTableItem from "../../../../components/admin/genre/GenreTableItem";

export const dynamic = 'force-dynamic'

async function getGenres() {
  return await prisma.genre.findMany({
    select: { name: true, id: true, thumbnail_url: true },
  });
}

async function deleteGenre(id) {
  "use server";

  console.log("delete", id);
  redirect("/private/admin/genre");
}

export default async function Genre() {
  const genres = await getGenres();

  return (
    <>
      <div className="mainLayout">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h1 className="text-2xl">Genres | List</h1>
          <Link
            href="/private/admin/genre/new"
            className="border border-pink bg-pink rounded py-1 px-2"
          >
            New
          </Link>
        </div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full mt-5">
            <thead>
              <tr>
                <th className="adminTableRow">S/N</th>
                <th className="adminTableRow">Thumbnail</th>
                <th className="adminTableRow">Name</th>
                <th className="adminTableRow">Actions</th>
              </tr>
            </thead>
            <tbody>
              {genres.map((genre, index) => (
                <GenreTableItem
                  genre={genre}
                  index={index}
                  deleteGenre={deleteGenre}
                  key={index}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
