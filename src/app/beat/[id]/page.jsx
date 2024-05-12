import prisma from "../../../db";
import BeatView from "../../../components/beat/BeatView"

export default async function BeatById({ params }) {
  const beat_id = params.id;

  const beat = await prisma.beat.findUnique({ where: { id: beat_id } });
  if (!beat || beat === null || beat === undefined) {
    return (
      <>
        <div className="mainLayout">
          <div className="text-4xl font-bold">404 not found.</div>
        </div>
      </>
    );
  }

  return (
    <>
     <BeatView beat={beat} />
    </>
  );
}
