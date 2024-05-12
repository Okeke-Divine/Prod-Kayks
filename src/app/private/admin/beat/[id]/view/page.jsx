import Link from "next/link";
import prisma from "../../../../../../db";

async function getBeat(id) {
  return await prisma.beat.findFirstOrThrow({ where: { id: id } });
}

export default async function ViewBeat({ params }) {
  const id = params.id;
  const beat = await getBeat(id);
  return (
    <>
      <div className="mainLayout">
        <div className="mb-10">
            <div>
              <div>Name: {beat.name}</div>
              <div>Desc: {beat.desc}</div>
              <div>Sold: {beat.sold}</div>
              <div>Code: {beat.code}</div>
              <div>Tags: {beat.tags}</div>
              <div>Bpm: {beat.bpm}</div>
              <div>Key: {beat.key}</div>
              <div>Price: {beat.price}</div>
              <div>Artist: {beat.artist}</div>
              <div>Song: {beat.song}</div>
              <div>Contract: {beat.sontract}</div>
            </div>
        </div>
        <Link href=".." className="bg-pink py-2 px-3 rounded">
          Back
        </Link>
      </div>
    </>
  );
}
