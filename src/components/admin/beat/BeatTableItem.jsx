import Link from "next/link";

export default function BeatTableItem({ beat, index }) {
  const viewUrl = `/private/admin/beat/${beat.id}/view`;
  return (
    <>
      <tr key={index}>
        <td className="adminTableRow">{index + 1}</td>
        <td className="adminTableRow">{beat.name}</td>
        <td className="adminTableRow">{beat.bpm}</td>
        <td className="adminTableRow">{beat.key}</td>
        <td className="adminTableRow">{beat.price}</td>
        <td className="adminTableRow">{beat.sold}</td>
        <td className="adminTableRow">{beat.code}</td>
        <td className="adminTableRow">
          <Link className="text-wood" href={viewUrl}>
            View
          </Link>
        </td>
      </tr>
    </>
  );
}
