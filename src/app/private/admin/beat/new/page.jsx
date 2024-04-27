import prisma from "../../../../../db";

async function getGenres() {
  return await prisma.genre.findMany({
    select: { name: true, thumbnail_url: true },
  });
}

export default async function NewBeat() {
  async function createBeat(data) {
    "use server";
    const name = data.get("name");
    const genreId = data.get("genreId");
    const code = data.get("code");
    const desc = data.get("desc");
    const tags = data.get("tags");
    const bpm  = data.get("bpm");
    const key = data.get("key");
    const price = data.get("price");
    const thumbnail = data.get("thumbnail");
    const mp3_url = data.get("mp3_url");
    const sold = data.get("sold");
    console.log(name);
  }

  const genres = await getGenres({ select: { name: true, id: true } });

  return (
    <>
      <div className="mainLayout">
        <h1 className="text-2xl">Beat | New</h1>
        <form action={createBeat} className="mt-5">
          <div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="adminInput"
                required
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Select a Genre</label>
              <select
                name="genreId"
                required
                className="adminInput text-gray-400"
              >
                <option selected disabled>
                  Select a Genre
                </option>
                {genres.map((genre, index) => (
                  <option key={index} value={genre.id}>
                    {genre.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Code</label>
              <input
                type="number"
                name="code"
                placeholder="Code"
                className="adminInput"
                required
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Description</label>
              <input
                type="text"
                name="desc"
                placeholder="Description"
                className="adminInput"
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
                type="file"
                name="thumbnail"
                className="adminInput text-white"
                accept="image/*"
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Mp3</label>
              <input
                type="file"
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
          <button className="bg-pink py-2 px-5 rounded mt-1">Submit</button>
        </form>
      </div>
    </>
  );
}
