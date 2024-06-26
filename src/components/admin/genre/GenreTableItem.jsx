"use client";
export default function GenreTableItem({ genre, index, deleteGenre }) {
  function prepareDelete(id) {
    const confirmed = confirm(
      "Are you sure you want to delete this genre? This action cannot be undone."
    );

    if (confirmed) {
      document.getElementById(id).style.display = "none";
      deleteGenre(id);
    }
  }

  return (
    <>
      <tr id={genre.id}>
        <td className="adminTableRow">{index + 1}</td>
        <td className="adminTableRow">
          <img src={genre.thumbnail_url} alt={genre.name} className="w-[50px]" />
        </td>
        <td className="adminTableRow">{genre.name}</td>
        <td className="adminTableRow text-pink flex gap-2 flex-wrap">
          <button onClick={() => prepareDelete(genre.id)}>[x]</button>
          <button>[edit]</button>
        </td>
      </tr>
    </>
  );
}
