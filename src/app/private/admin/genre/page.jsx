import prisma from "../../../../db";
import GenreItem from "../../../../components/admin/genre/GenreItem";

async function getGenres() {
  return await prisma.genre.findMany({ select: { name: true } });
}

export default async function Genre() {
  const genres = await getGenres({select: {name: true, thumbnail_url:true}});

  return (
    <>
      <div className="mainLayout">
        <h1 className="text-2xl">Genres | List</h1>
        <table className="table w-full mt-5">
          <tr>
            <th className="adminTableRow">S/N</th>
            <th className="adminTableRow">Name</th>
            <th className="adminTableRow">Thumbnail URL</th>
          </tr>
            {genres.map((genre, index) => (
                <tr>
                    <th className="adminTableRow">{(index+1)}</th>
                    <th className="adminTableRow">{genre.name}</th>
                    <th className="adminTableRow">{genre.thumbnail_url}</th>
                </tr>
            ))}
        </table>
      </div>
    </>
  );
}
