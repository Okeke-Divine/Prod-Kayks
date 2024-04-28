import Link from "next/link";
import prisma from "../../../../../../db";

async function getBeat() {
  return await prisma.beat.findFirstOrThrow({ where: { id: id } });
}

export default async function ViewBeat({ params }) {
  const id = params.id;
  const beat = await getBeat(id); // Use double equals for comparison
  return (
    <>
      <div className="mainLayout">
        <div className="mb-10">
          {beat.map((beat, index) => (
            <div key={index}>
              <div>Name: {beat.title}</div>
            </div>
          ))}
        </div>
        <Link href=".." className="bg-pink py-2 px-3 rounded">
          Back
        </Link>
      </div>
    </>
  );
}
