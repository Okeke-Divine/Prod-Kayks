import Link from "next/link";
import prisma from "../../../../db"

async function getBeats(){
  return await prisma.beat.findMany();
}

export default async function Beats() {
  const beats = await getBeats()

  return (
    <>
      <div className="mainLayout">
        <div className="flex flex-wrap gap-2 justify-between items-center">
          <h1 className="text-2xl">Beat | List</h1>
          <Link
            href="/private/admin/beat/new"
            className="border border-pink bg-pink rounded py-1 px-2"
          >
            New
          </Link>
        </div>
        <div>
          <table className="table w-full mt-5">
            <thead>
            <tr>
              <th className="adminTableRow">S/N</th>
              <th className="adminTableRow">Name</th>
              <th className="adminTableRow">Bpm</th>
              <th className="adminTableRow">Key</th>
              <th className="adminTableRow">Price</th>
              <th className="adminTableRow">Sold</th>
              <th className="adminTableRow">Code</th>
            </tr>
            </thead>
           <tbody>
           {beats.map((beat,index) => (
              <tr key={index}>
              <td className="adminTableRow">{(index+1)}</td>
              <td className="adminTableRow">{beat.name}</td>
              <td className="adminTableRow">{beat.bpm}</td>
              <td className="adminTableRow">{beat.key}</td>
              <td className="adminTableRow">{beat.price}</td>
              <td className="adminTableRow">{beat.sold}</td>
              <td className="adminTableRow">{beat.code}</td>
              </tr>
            ))}
           </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
