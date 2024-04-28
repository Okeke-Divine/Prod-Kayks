export default function GenreTableItem({genre, index}) {
  return (
    <>
      <tr id={genre.id}>
        <td className="adminTableRow">{index + 1}</td>
        <td className="adminTableRow">{genre.name}</td>
        <td className="adminTableRow">{genre.thumbnail_url}</td>
        <td className="adminTableRow text-pink flex gap-2 flex-wrap">
          <button onClick={() => prepareDelete(id)}>[x]</button>
          <button>[edit]</button>
        </td>
      </tr>
    </>
  );
}
