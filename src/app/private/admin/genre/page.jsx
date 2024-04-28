import Link from "next/link";
import prisma from "../../../../db";
import GenreItem from "../../../../components/admin/genre/GenreItem";

async function getGenres() {
  return await prisma.genre.findMany({
    select: { name: true, thumbnail_url: true },
  });
}

export default async function Genre() {
  const genres = await getGenres({
    select: { name: true, thumbnail_url: true },
  });

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
        <table className="table w-full mt-5">
          <thead>
            <tr>
              <th className="adminTableRow">S/N</th>
              <th className="adminTableRow">Name</th>
              <th className="adminTableRow">Thumbnail URL</th>
            </tr>
          </thead>
          <tbody>
            {genres.map((genre, index) => (
              <tr>
                <td className="adminTableRow">{index + 1}</td>
                <td className="adminTableRow">{genre.name}</td>
                <td className="adminTableRow">{genre.thumbnail_url}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
