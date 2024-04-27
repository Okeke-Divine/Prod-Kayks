export default function NewBeat() {
  async function createBeat(data) {
    "use server";

    console.log(data);
  }
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
              />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Select a Genre</label>
              <select className="adminInput">
                <option default disabled>
                  Select a Genre
                </option>
              </select>
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Code</label>
              <input
                type="number"
                name="code"
                placeholder="Code"
                className="adminInput"
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
              <label className="adminInputLabel">Price (USD)  $</label>
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
              <input type="file" name="thumbnail" className="adminInput" />
            </div>
            <div className="adminInputContainer">
              <label className="adminInputLabel">Mp3</label>
              <input type="file" name="mp3" className="adminInput" />
            </div>
          </div>
          <button className="bg-pink py-2 px-5 rounded mt-1">Submit</button>
        </form>
      </div>
    </>
  );
}
