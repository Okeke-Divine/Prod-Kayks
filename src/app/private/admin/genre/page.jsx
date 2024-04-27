import prisma from "../../../../db";
import GenreItem from "../../../../components/admin/genre/GenreItem";

async function getGenres() {
  return await prisma.genre.findMany({ select: { name: true } });
}

export default async function Genre() {
  const genres = await getGenres();

  return (
    <>
      <div className="mainLayout">
        <h1 className="text-2xl">Genres | List</h1>
        <table>
          <tr>
            <th>S/N</th>
            <th></th>
          </tr>
        </table>
      </div>
    </>
  );
}
