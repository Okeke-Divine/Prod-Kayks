import prisma from "../../../../../../db";
import { redirect } from "next/navigation";

async function updateBeat(data) {
  "use server";

  const username = process.env.ADMIN_USERNAME;
  const password = process.env.ADMIN_PASSWORD;

  const uname = data.get("uname");
  const pswd = data.get("pswd");

  if (uname !== username || password !== pswd) {
    return;
  }

  const name = data.get("name");
  const id = data.get("id");
  const genreId = data.get("genreId");
  const code = parseInt(data.get("code"));
  const desc = data.get("desc");
  const tags = data.get("tags");
  const bpm = parseInt(data.get("bpm"));
  const key = data.get("key");
  const price = parseInt(data.get("price"));
  const thumbnail = data.get("thumbnail");
  const mp3_url = data.get("mp3_url");

  var sold = data.get("sold");
  var free_download = data.get("free_download");

  var _sold = sold === null ? false : true;
  var _free_download = free_download === null ? false : true;

  console.log("picked");
  console.log(
    id,
    name,
    genreId,
    code,
    desc,
    tags,
    bpm,
    key,
    price,
    thumbnail,
    mp3_url,
    _sold,
    _free_download
  );
  return;

  if (
    typeof name !== "string" ||
    name.length === 0 ||
    typeof genreId !== "string" ||
    genreId.length === 0 ||
    code.length === 0
  ) {
  } else {
    await prisma.beat.update({
      data: {
        genreId,
        name,
        desc,
        code,
        tags,
        bpm,
        key,
        price,
        sold: _sold,
        thumbnail,
        mp3_url,
        free_download: _free_download,
      },
      where: { id: id },
    });
    redirect("/private/admin/beat");
  }
}

export default async function EditBeat({ params }) {
  const id = params.id;
  const beat = await prisma.beat.findUnique({
    where: { id: id, deleted: false },
  });

  if (!beat || beat === null || beat === undefined) {
    return (
      <>
        <div className="text-4xl font-bold mt-10">This beat does not exist</div>
      </>
    );
  }

  const genres = await prisma.genre.findMany();

  return (
    <>
      <div className="mainLayout">
        <h1 className="text-2xl">Beat | Edit | {beat.name}</h1>
        <form action={updateBeat} className="mt-5">
          <input
            name="id"
            value={beat.id}
            readOnly={true}
            className="hidden -z-50 fixed -top-full -left-full"
            hidden
          />
          <div>
            <div className="adminInputContainer">
              <input
                type="text"
                className="adminInput"
                placeholder="Uname"
                name="uname"
              />
            </div>
            <div className="adminInputContainer">
              <input
                type="password"
                className="adminInput"
                placeholder="Pswd"
                name="pswd"
              />
            </div>
            <div className="py-5 px-10">
              <hr />
            </div>
          </div>
          <div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Name*</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="adminInput"
                required
                defaultValue={beat.name}
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Select a Genre*</label>
              <select
                name="genreId"
                className="adminInput text-gray-400"
                required
              >
                <option selected hidden value={""}>
                  Select a Genre
                </option>
                {genres.map((genre, index) => (
                  <option
                    selected={beat.genreId === genre.id}
                    className="text-black"
                    key={index}
                    value={genre.id}
                  >
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Code*</label>
              <input
                type="number"
                name="code"
                placeholder="Code"
                className="adminInput"
                required
                defaultValue={beat.code}
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Description*</label>
              <input
                type="text"
                name="desc"
                placeholder="Description"
                className="adminInput"
                required
                defaultValue={beat.desc}
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Tags</label>
              <input
                type="text"
                name="tags"
                placeholder="Tags (seperated by comma)"
                className="adminInput"
                defaultValue={beat.tags}
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">BPM</label>
              <input
                type="text"
                name="bpm"
                placeholder="BPM"
                className="adminInput"
                defaultValue={beat.bpm}
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Key</label>
              <input
                type="text"
                name="key"
                placeholder="Key"
                className="adminInput"
                defaultValue={beat.key}
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Price (USD) $</label>
              <input
                type="number"
                name="price"
                placeholder="Price (USD) $"
                defaultValue={beat.price}
                className="adminInput"
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Thumbnail</label>
              <input
                type="text"
                name="thumbnail"
                className="adminInput"
                accept="image/*"
                defaultValue={beat.thumbnail}
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Mp3</label>
              <input
                type="text"
                name="mp3_url"
                className="adminInput"
                accept="audio/mp3"
                defaultValue={beat.mp3_url}
              />
            </div>
          </div>
          <div className="adminInputContainer">
            <input
              type="checkbox"
              name="sold"
              className="mr-2"
              // checked={true}
              defaultChecked={beat.sold}
            />
            <label className="adminInputLabel">Sold</label>
          </div>
          <div className="adminInputContainer">
            <input
              type="checkbox"
              name="free_download"
              className="mr-2"
              defaultChecked={beat.free_download}
            />
            <label className="adminInputLabel">Free Download</label>
          </div>
          <button className="bg-pink py-2 px-5 rounded mt-1">Sold</button>
        </form>
      </div>
    </>
  );
}
