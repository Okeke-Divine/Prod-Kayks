import Link from "next/link";
import prisma from "../../../../../../db";

export default async function ViewBeat({ params }) {
  const id = params.id;
  try {
    const beat = await prisma.beat.findFirstOrThrow({ where: { id: id } }); // Use double equals for comparison

    // Display beat information here (e.g., title, artist, genre)
    return (
      <>
        <div className="mainLayout">
          <Link href=".." className="bg-pink py-2 px-3 rounded">
            Back
          </Link>
          <h1>{beat.title}</h1>
          {/* Add more elements to display other beat properties */}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error fetching beat:", error);
    // Optionally render an error message or fallback content here
    return (
      <>
        <div className="mainLayout">
          <p className="mb-10">Error: Beat not found.</p>
          <Link href=".." className="bg-pink py-2 px-3 rounded">
            Back
          </Link>
        </div>
      </>
    );
  }
}
