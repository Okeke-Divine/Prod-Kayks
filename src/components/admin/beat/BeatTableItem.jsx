import Link from "next/link";

export default function BeatTableItem({ beat, index }) {
  const viewUrl = `/private/admin/beat/${beat.id}/view`;
  const editUrl = `/private/admin/beat/${beat.id}/edit`;
  return (
    <>
      <tr key={index}>
        <td className="adminTableRow">{index + 1}</td>
        <td className="adminTableRow">{beat.name}</td>
        <td className="adminTableRow">{beat.bpm}</td>
        <td className="adminTableRow">{beat.key}</td>
        <td className="adminTableRow">{beat.price}</td>
        <td className="adminTableRow">{beat.sold ? "Sold": "Pending"}</td>
        <td className="adminTableRow">{beat.code}</td>
        <td className="adminTableRow flex gap-2">
          <Link className="text-wood" href={viewUrl}>
            View
          </Link>
          <Link className="text-wood" href={editUrl}>
            Edit
          </Link>
        </td>
      </tr>
    </>
  );
}
