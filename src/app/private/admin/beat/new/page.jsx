import prisma from "../../../../../db";
import { redirect } from "next/navigation";

async function getGenres() {
  return await prisma.genre.findMany({
    select: { name: true, id: true },
  });
}

export default async function NewBeat() {
  async function createBeat(data) {
    "use server";

    const username = process.env.ADMIN_USERNAME;
    const password = process.env.ADMIN_PASSWORD;

    const uname = data.get("uname");
    const pswd = data.get("pswd");

    if (uname !== username || password !== pswd) {
      return;
    } else {
      const name = data.get("name");
      const genreId = data.get("genreId");
      const code = parseInt(data.get("code"));
      const desc = data.get("desc");
      const tags = data.get("tags");
      const bpm = parseInt(data.get("bpm"));
      const key = data.get("key");
      const price = parseInt(data.get("price"));
      const thumbnail = data.get("thumbnail");
      const mp3 = data.get("mp3");
      const sold = data.get("sold");

      if (
        typeof name !== "string" ||
        name.length === 0 ||
        typeof genreId !== "string" ||
        genreId.length === 0 ||
        code.length === 0
      ) {
        return;
      } else {
        await prisma.beat.create({
          data: {
            genreId,
            name,
            desc,
            code,
            tags,
            bpm,
            key,
            price,
          },
        });
        redirect("/private/admin/beat");
      }
    }
  }

  const genres = await getGenres({ select: { name: true, id: true } });

  return (
    <>
      <div className="mainLayout">
        <h1 className="text-2xl">Beat | New</h1>
        <form action={createBeat} className="mt-5">
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
                  <option className="text-black" key={index} value={genre.id}>
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
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Tags</label>
              <input
                type="text"
                name="tags"
                placeholder="Tags (seperated by comma)"
                className="adminInput"
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">BPM</label>
              <input
                type="text"
                name="bpm"
                placeholder="BPM"
                className="adminInput"
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Key</label>
              <input
                type="text"
                name="key"
                placeholder="Key"
                className="adminInput"
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Price (USD) $</label>
              <input
                type="number"
                name="price"
                placeholder="Price (USD) $"
                defaultValue={20}
                className="adminInput"
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Thumbnail</label>
              <input
                type="text"
                name="thumbnail"
                className="adminInput text-white"
                accept="image/*"
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Mp3</label>
              <input
                type="text"
                name="mp3_url"
                className="adminInput text-white"
                accept="audio/mp3"
              />
            </div>
          </div>
          <div className="adminInputContainer">
            <input
              type="checkbox"
              name="sold"
              className="mr-2"
              defaultChecked={false}
            />
            <label className="adminInputLabel">Sold</label>
          </div>
          <div className="adminInputContainer">
            <input
              type="checkbox"
              name="free_download"
              className="mr-2"
              defaultChecked={false}
            />
            <label className="adminInputLabel">Free Download</label>
          </div>
          <button className="bg-pink py-2 px-5 rounded mt-1">Submit</button>
        </form>
      </div>
    </>
  );
}
