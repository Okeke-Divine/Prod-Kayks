import prisma from "../../../db";

export const dynamic = "force-dynamic";

export default async function BeatById({ params }) {
  const beat_id = params.id;

  const beat = await prisma.beat.findUnique({ where: { id: beat_id } });
  if (!beat || beat === null || beat === undefined) {
    return (
      <>
        <div>
          <div className="text-4xl font-bold">404 not found.</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <div>Beat Details</div>
      </div>
    </>
  );
}
