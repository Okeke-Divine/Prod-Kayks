import prisma from "../../../../db"
import GenreItem from "../../../../components/admin/genre/GenreItem"

async function getGenres(){
  return await prisma.genre.findMany({ select: { name: true } });
}

export default async function Genre(){
    const genres = await getGenres();

    return (
        <>

        <div></div>

        </>
    )
}