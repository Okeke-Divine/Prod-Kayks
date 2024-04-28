"use client";

export default function GenreTableItem({ genre, index, deleteGenre }) {
  function prepareDelete(id) {
    console.log(document.getElementById(id));
    deleteGenre(id);
  }
  return (
    <>
      <tr id={genre.id}>
        <td className="adminTableRow">{index + 1}</td>
        <td className="adminTableRow">{genre.name}</td>
        <td className="adminTableRow">{genre.thumbnail_url}</td>
        <td className="adminTableRow text-pink flex gap-2 flex-wrap">
          <button onClick={() => prepareDelete(genre.id)}>[x]</button>
          <button>[edit]</button>
        </td>
      </tr>
    </>
  );
}
